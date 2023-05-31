import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import IUserState from '../models/iuser-state.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  SERVER = environment.SERVER;
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
    return this.http.post<{ status: number, success: boolean; results: string, message: string }>(
      this.SERVER + '/api/users/login',
      user
    ).pipe(
      map((response) => {
        return response;
      }),
    ).pipe(
      catchError((error) => {
        throw(error.error);
      })
    );
  }
  signup(user: {
    firstname: string;
    lastname: string;
    user_email: string;
    user_password: string;
    user_role: string;
  }) {
    return this.http.post<{ status: number, success: boolean; results: string, message: string }>(
      this.SERVER + '/api/users/signup',
      user
    ).pipe(
      map((response) => {
        return response;
      }),
    ).pipe(
      catchError((error) => {
        throw(error.error);
      })
    );
  }
}
