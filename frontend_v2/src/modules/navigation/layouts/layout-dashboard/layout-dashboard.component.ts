import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { SpinnerService } from '@common/services/spinner.service';
import { sideNavItems, sideNavSections } from '@modules/navigation/data';
import { NavigationService } from '@modules/navigation/services';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-layout-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-dashboard.component.html',
    styleUrls: ['layout-dashboard.component.scss'],
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {
    @Input() static = false;
    @Input() light = false;
    @HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
    subscription: Subscription = new Subscription();
    sideNavItems = sideNavItems;
    sideNavSections = sideNavSections;
    sidenavStyle = 'sb-sidenav-dark';

    constructor(
        public navigationService: NavigationService,
        private changeDetectorRef: ChangeDetectorRef,
        private bsModalConfig: NgbModalConfig,
        private spinnerService: SpinnerService
    ) {
        // boostrap modal global config
        bsModalConfig.backdropClass = 'modal-backdrop';
        bsModalConfig.windowClass = 'modal-window';
        bsModalConfig.backdrop = 'static';
        bsModalConfig.centered = true;
        bsModalConfig.scrollable = true;
    }
    ngOnInit() {
        if (this.light) {
            this.sidenavStyle = 'sb-sidenav-light';
        }
        this.subscription.add(
            this.navigationService.sideNavVisible$().subscribe(isVisible => {
                this.sideNavHidden = !isVisible;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    onContentClick() {
        console.log('clicked');
        if (window.matchMedia("(max-width: 991px)").matches) {
            if (this.sideNavHidden) {
                this.navigationService.toggleSideNav();
            }
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
