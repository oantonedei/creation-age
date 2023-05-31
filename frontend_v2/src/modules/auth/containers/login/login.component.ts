import { HttpResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IUserState from '@modules/auth/models/iuser-state.interface';
import { UserService } from '@modules/auth/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = inject(FormBuilder).nonNullable.group({
    user_email: ['', Validators.required],
    user_password: ['', Validators.required],
  });

  success = false;
  error = false;
  errorMessage = 'Error Logging In: ';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService
      .login(
        this.loginForm.value as { user_email: string; user_password: string }
      )
      .subscribe({
        next: (response: any) => {
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
            this.success = true;
            this.error = false;
            setTimeout(() => {
              this.router.navigate(['/explore']);
            }, 1000);
          } 
        },
        error: (error) => {
          this.error = true;
          this.errorMessage += error.message;
        },
      });
  }
}
