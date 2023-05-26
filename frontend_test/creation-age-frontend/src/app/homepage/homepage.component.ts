import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  userServices = inject(UserService);
  router = inject(Router);
  
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
