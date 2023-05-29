import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { AnalyticsComponent } from './container/analytics/analytics.component';
import { AnalyticsModule } from './analytics.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Analytics',
      breadcrumbs: [
        {
          text: 'Analytics',
          link: '/analytics',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: AnalyticsComponent,
  },
];
@NgModule({
  imports: [AnalyticsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
