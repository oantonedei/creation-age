import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreModule } from './explore.module';
import { SBRouteData } from '@modules/navigation/models';
import { ExploreComponent } from './container/explore/explore.component';
import { ViewProjectComponent } from './container/view-project/view-project.component';

localStorage.setItem('MEDIA_STATE', JSON.stringify('View Project'));
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
  {
    path: ':id',
    data: {
      title: 'Explore',
      breadcrumbs: [
        {
          text: 'Explore',
          link: '/explore',
        },
        {
          text: JSON.parse(localStorage.getItem('MEDIA_STATE') as string || ''),
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: ViewProjectComponent,
  },
];

@NgModule({
  imports: [ExploreModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
