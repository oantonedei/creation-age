import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  signupForm!:FormGroup;
  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      firstname:new FormControl('', [Validators.required]),
      lastname:new FormControl('', [Validators.required]),
      user_email:new FormControl('', [Validators.required]),
      user_password:new FormControl('', [Validators.required]),
      user_role:new FormControl('', [Validators.required])
    });
  }
  
  get user_email() {
    return this.signupForm.get('user_email');
  }

  signup() {
    const value = this.signupForm.value;

    this.userService
      .signup(value)
      .subscribe({
        next:(response)=>{
          if (response.success) {
            this.router.navigate(['/auth/login']);
          }
        },
        error:(error)=>{
          console.log(error);
        }
      });
  }
}
