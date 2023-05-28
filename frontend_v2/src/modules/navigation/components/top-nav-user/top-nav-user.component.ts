import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { iif, Subscription } from 'rxjs';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit, OnDestroy {
    user!: any | null;
    userSubscription!: Subscription;
    constructor(
        private cd: ChangeDetectorRef) { }
    ngOnInit() {
        this.user = {
            displayName: 'Damon salvatore',
            user: {
                firstName: 'Damon',
                lastName: 'Salvatore',
                email: 'damon@yahoo.com'
            }
        };
    }

    logout() {

    }

    getInitial() {
        console.log(this.user);
        if (this.user?.user?.firstName && this.user?.user?.lastName) {
            return this.user?.user?.firstName?.[0] + '' + this.user?.user?.lastName?.[0];
        } else {
            return this.user?.email?.[0].toUpperCase();
        }
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe();
    }

}
