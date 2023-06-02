import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { ExploreService } from '@modules/explore/services/explore.service';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-view-lineage',
  templateUrl: './view-lineage.component.html',
  styleUrls: ['./view-lineage.component.scss']
})
export class ViewLineageComponent {
  exploreService = inject(ExploreService);
  lineage!: IMediaState[];
  id!: string;
  router = inject(Router);
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id') as string),
        mergeMap((id) => {
          this.id = id;
          return this.exploreService.getLineage(id);
        })
      )
      .subscribe((response) => {
       if (response.success) {
         this.lineage = response.lineage;
       }
      });
  }

  viewProject(id: string) {
    this.router.navigate(['explore', id]);
  }
}
