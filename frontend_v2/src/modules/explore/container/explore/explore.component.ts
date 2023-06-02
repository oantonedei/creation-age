import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { ExploreService } from '@modules/explore/services/explore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  router = inject(Router);
  exploreService = inject(ExploreService);
  mediaState$!: Observable<IMediaState[]>;

  constructor() { 
    this.fetchMedia();
  }
  
  fetchMedia() {
    this.mediaState$ = this.exploreService.getAllMedia();
  }
  viewProject(id: string) {    
    this.router.navigate(['explore', id]);
  }
}