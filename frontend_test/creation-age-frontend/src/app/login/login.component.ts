import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import IUserState from '../IUserState.interface';
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
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  login() {
    this.userService
      .login(
        this.loginForm.value as { email: string; password: string }
      )
      .subscribe((response) => {
        if (response.success) {
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
          console.log('Login successful!');
          this.router.navigate(['homepage']);
        }
      });
  }
}
