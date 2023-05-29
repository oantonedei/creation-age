import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './profile.module';
import { SBRouteData } from '@modules/navigation/models';
import { ProfileComponent } from './containers/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'My Profile',
      breadcrumbs: [
        {
          text: 'My Profile',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [ProfileModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
