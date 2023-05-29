import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('../modules/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
    canActivate: [],
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
