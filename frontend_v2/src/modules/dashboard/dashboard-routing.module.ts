/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';
import { AuthorizeGuard } from '@common/guards/authorize.guard';

/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      //roles:[UserRoles.GROUP_ADMIN, UserRoles.REGIONAL_ADMIN, UserRoles.AFFILIATE_ADMIN],
      title: 'Dashboard',
      breadcrumbs: [
        {
          text: 'Dashboard',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.DashboardComponent,
  },
  {
    path: 'apps-dashboard',
    data: {
      title: 'Apps Dashboard',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Apps Dashboard',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.AppsDashboardComponent,
  },

  {
    path: 'system-dashboard',
    data: {
      title: 'System Users Setup',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'System Users Setup',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.SystemUserComponent,
  },

  {
    path: 'static',
    data: {
      title: 'Dashboard Static - SB Admin Angular',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Static',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.StaticComponent,
  },
  {
    path: 'light',
    data: {
      title: 'Dashboard Light - SB Admin Angular',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Light',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.LightComponent,
  },


  // {
  //     path: 'user',
  //     data: {
  //         title: 'User Dashboard',
  //         breadcrumbs: [
  //             {
  //                 text: 'Dashboard',
  //                 active: true,
  //             },
  //         ],
  //     } as SBRouteData,
  //     canActivate: [MsalGuard],
  //     component: dashboardContainers.UserDashboardComponent,
  // }
  {
    path: '',
    data: {
      //roles:[UserRoles.GROUP_ADMIN, UserRoles.REGIONAL_ADMIN, UserRoles.AFFILIATE_ADMIN],
      title: 'Dashboard',
      breadcrumbs: [
        {
          text: 'Dashboard',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [AuthorizeGuard],
    component: dashboardContainers.DashboardComponent,
  },
  {
    path: 'static',
    data: {
      title: 'Dashboard Static - SB Admin Angular',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Static',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.StaticComponent,
  },
  {
    path: 'light',
    data: {
      title: 'Dashboard Light - SB Admin Angular',
      breadcrumbs: [
        {
          text: 'Dashboard',
          link: '/dashboard',
        },
        {
          text: 'Light',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: dashboardContainers.LightComponent,
  },
  // {
  //     path: 'user',
  //     data: {
  //         title: 'User Dashboard',
  //         breadcrumbs: [
  //             {
  //                 text: 'Dashboard',
  //                 active: true,
  //             },
  //         ],
  //     } as SBRouteData,
  //     canActivate: [MsalGuard],
  //     component: dashboardContainers.UserDashboardComponent,
  // }
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
