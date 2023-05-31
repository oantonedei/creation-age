import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  signupForm = inject(FormBuilder).nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    user_email: ['', Validators.required],
    user_password: ['', Validators.required],
    user_role: ['', Validators.required],
  });

  success = false;
  error = false;
  errorMessage = 'Error Signing Up: ';

  constructor(private userService: UserService, private router: Router) {}

  get user_email() {
    return this.signupForm.get('user_email');
  }

  signup() {
    const value = this.signupForm.value;

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
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.success = true;
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
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
