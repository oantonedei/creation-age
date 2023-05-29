import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreModule } from './explore.module';
import { SBRouteData } from '@modules/navigation/models';
import { ExploreComponent } from './container/explore/explore.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Explore',
      breadcrumbs: [
        {
          text: 'Explore',
          link: '/explore',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: ExploreComponent,
  },
];

@NgModule({
  imports: [ExploreModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
