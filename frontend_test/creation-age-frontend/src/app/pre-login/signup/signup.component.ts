import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userService = inject(UserService);
  router = inject(Router);
  http = inject(HttpClient);
  @Output() pageChecker = new EventEmitter<string>();

  signupForm = inject(FormBuilder).nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    user_email: ['', Validators.required],
    user_password: ['', Validators.required],
    user_role: ['', Validators.required],
  });
  get user_email() {
    return this.signupForm.get('user_email');
  }
  signup() {
    this.userService
      .signup(
        this.signupForm.value as {
          firstname: string;
          lastname: string;
          user_email: string;
          user_password: string;
          user_role: string;
        }
      )
      .subscribe((response) => {
        if (response.success) {
          console.log('Signup successful!');
          this.pageChecker.emit('login');
        }
      });
  }
}
