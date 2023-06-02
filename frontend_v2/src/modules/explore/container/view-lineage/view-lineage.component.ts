import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '@modules/explore/services/explore.service';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-view-lineage',
  templateUrl: './view-lineage.component.html',
  styleUrls: ['./view-lineage.component.scss']
})
export class ViewLineageComponent {
  exploreService = inject(ExploreService);
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id') as string),
        mergeMap((id) => this.exploreService.getLineage(id))
      )
      .subscribe((response) => {
       
      });
  }
}
