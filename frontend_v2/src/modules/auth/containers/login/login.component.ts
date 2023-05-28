import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IUserState from '@modules/auth/models/iuser-state.interface';
import { UserService } from '@modules/auth/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(
    private userService:UserService,
    private router:Router){}

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      user_email:new FormControl('', [Validators.required]),
      user_password:new FormControl('', Validators.required)
    });
  }
  
  login() {
    const value = this.loginForm.value;
    this.userService.login(value)
    .subscribe({
      next:(response)=>{
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
      },error:(error)=>{
        console.log(error);
      }
    });
  }
}
