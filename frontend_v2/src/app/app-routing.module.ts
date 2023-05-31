import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '@modules/auth/services/user.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('../modules/explore/explore-routing.module').then(
        (m) => m.ExploreRoutingModule
      ),
    canActivate: [
      () => (inject(UserService)._userState.value.jwt ? true : false),
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../modules/auth/auth.routing.module').then(
        (m) => m.AuthRoutingModule
      ),
    canActivate: [],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('../modules/projects/projects-routing.module').then(
        (m) => m.ProjectsRoutingModule
      ),
    canActivate: [],
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () =>
      import('../modules/profile/profile-routing.module').then(
        (m) => m.ProfileRoutingModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('../modules/analytics/analytics-routing.module').then(
        (m) => m.AnalyticsRoutingModule
      ),
    canActivate: [],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../modules/error/error-routing.module').then(
        (m) => m.ErrorRoutingModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('../modules/error/error-routing.module').then(
        (m) => m.ErrorRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
