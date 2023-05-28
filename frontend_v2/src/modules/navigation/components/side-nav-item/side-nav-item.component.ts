import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;

    @Input() expanded = false;
    routeData!: SBRouteData;

    authUserSub!:Subscription;
    authUser!:any;

    constructor() {
       
    }
    ngOnInit() {
       
    }

    canDisplay(){
       return true;
    }
}
