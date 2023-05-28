import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;
   

    constructor(public navigationService: NavigationService, 
        private router:Router
        ) {}

    ngOnInit() {
        
    }

    getNavSections(){

    }

    isActiveLinkExistInSectionItem(item:string): boolean{
        if(this.sideNavItems[item].submenu){
            return this.sideNavItems[item].submenu!.some(i=> this.router.url.includes(i.link!));
        }
        return false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
