import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUserState from 'src/app/IUserState.interface';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  SERVER = 'http://localhost:3000';
  _userState: BehaviorSubject<IUserState> = new BehaviorSubject({
    jwt: '',
    _id: '',
    user_email: '',
    user_name: '',
    user_role: '',
  });
  getUserStates$ = this._userState.asObservable();
  setUserState(newState: IUserState) {
    this._userState.next(newState);
  }
  constructor(private http: HttpClient) {}

  login(user: { user_email: string; user_password: string }) {
    return this.http.post<{ success: boolean; results: string }>(
      this.SERVER + '/api/users/login',
      user
    );
  }
  signup(user: {
    firstname: string;
    lastname: string;
    user_email: string;
    user_password: string;
    user_role: string;
  }) {
    return this.http.post<{ success: boolean; results: string }>(
      this.SERVER + '/api/users/signup',
      user
    );
  }
}
