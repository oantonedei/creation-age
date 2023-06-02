import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services/user.service';
import { iif, Subscription } from 'rxjs';

@Component({
  selector: 'sb-top-nav-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-nav-user.component.html',
  styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnDestroy {
  userState = JSON.parse(
    localStorage.getItem('USER_STATE') || '{}'
  );

  displayName = this.userState.user_name.split(' ')[0];
  user = {
    displayName: this.userState.user_name.split(' ')[0],
    firstName: this.userState.user_name.split(' ')[0],
    lastName: this.userState.user_name.split(' ')[1],
    email: this.userState.user_email,
  };
  role = this.userState.user_role;

  userSubscription!: Subscription;
  userService = inject(UserService);
  router = inject(Router);

  constructor(private cd: ChangeDetectorRef) {}

  logout() {
    this.userService.setUserState({
      jwt: '',
      _id: '',
      user_email: '',
      user_name: '',
      user_role: '',
    });
    localStorage.removeItem('USER_STATE');
    this.router.navigate(['']);
  }

  getInitial() {
    if (this.user?.firstName && this.user?.lastName) {
      return this.user?.firstName?.[0] + '' + this.user?.lastName?.[0];
    } else {
      return this.user?.email?.[0].toUpperCase();
    }
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
