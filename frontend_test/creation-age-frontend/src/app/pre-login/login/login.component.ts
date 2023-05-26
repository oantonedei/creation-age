import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import IUserState from '../../IUserState.interface';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);
  http = inject(HttpClient);
  loginForm = inject(FormBuilder).nonNullable.group({
    user_email: ['', Validators.required],
    user_password: ['', Validators.required],
  });
  login() {
    this.userService
      .login(
        this.loginForm.value as { user_email: string; user_password: string }
      )
      .subscribe((response) => {
        if (response.success) {
          console.log('Login successful!');
          const decoded: IUserState = jwt_decode(response.results);
          this.userService.setUserState({
            ...decoded,
            jwt: response.results,
          });
          localStorage.setItem(
            'USER_STATE',
            JSON.stringify({
              ...decoded,
              jwt: response.results,
            })
          );

          this.router.navigate(['homepage']);
        }
      });
  }
}
