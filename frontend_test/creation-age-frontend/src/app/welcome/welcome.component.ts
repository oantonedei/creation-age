import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  router = inject(Router);
  title = 'Welcome to Creation Age!';
  checker = "signup";
  signupPage = () => {
    this.checker = "signup";
  };
  loginPage = () => {
    this.checker = "login";
  };
}
