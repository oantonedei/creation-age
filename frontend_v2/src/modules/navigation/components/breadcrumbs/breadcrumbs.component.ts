import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Breadcrumb } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'sb-breadcrumbs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    breadcrumbs!: Breadcrumb[];

    constructor(public navigationService: NavigationService,
        private cd:ChangeDetectorRef,
        private title:Title) {}
    ngOnInit() {
        this.subscription.add(
            this.navigationService.routeData$().subscribe(routeData => {
                this.breadcrumbs = routeData.breadcrumbs;
                this.title.setTitle(routeData.title + ' | '+ environment.applicationName);
                this.cd.detectChanges();
            })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
