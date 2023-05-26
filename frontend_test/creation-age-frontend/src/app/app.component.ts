import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import IUserState from './IUserState.interface';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent {
  userServices = inject(UserService);
  router = inject(Router);
  userState!: IUserState;
  constructor() {
    this.userServices.getUserStates$.subscribe((response) => {
      this.userState = response;
    });
  }
  logout() {
    this.userServices.setUserState({
      jwt: '',
      _id: '',
      user_email: '',
      user_name: '',
      user_role: '',
    });
    localStorage.removeItem('USER_STATE');
    this.router.navigate(['']);
  }
}
