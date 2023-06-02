import { Component, inject } from '@angular/core';
import IUserState from '@modules/auth/models/iuser-state.interface';
import { UserService } from '@modules/auth/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userService = inject(UserService);
  userState!: IUserState;

  constructor() { 
    this.userService.getUserStates$.subscribe((response) => {
      this.userState = response;
    });
  }
}
