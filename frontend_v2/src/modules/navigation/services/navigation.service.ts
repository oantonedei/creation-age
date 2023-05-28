import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ChildActivationEnd, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

import { SBRouteData } from '../models';

@Injectable()
export class NavigationService {
    _sideNavVisible$ = new BehaviorSubject(true);
    _routeData$ = new BehaviorSubject({} as SBRouteData);
    _currentURL$ = new BehaviorSubject('');

    constructor(public route: ActivatedRoute, public router: Router, private title:Title) {
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
                let snapshot = (event as ChildActivationEnd).snapshot;
                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                let routeData = snapshot.data as SBRouteData;
                this._routeData$.next(routeData);
                this._currentURL$.next(router.url);
                
                // if(router.url.toLowerCase().startsWith('/dashboard') || router.url.toLowerCase().startsWith('/auth')){
                //     this.title.setTitle(environment.collectiveName);
                // }else{
                    
                // }
                this.title.setTitle(routeData.title + ' | '+ environment.applicationName);
            });

            this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                this.toggleSideNav(true);
            });
    }

    sideNavVisible$(): Observable<boolean> {
        return this._sideNavVisible$;
    }

    toggleSideNav(visibility?: boolean) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        } else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }

    routeData$(): Observable<SBRouteData> {
        return this._routeData$;
    }

    currentURL$(): Observable<string> {
        return this._currentURL$;
    }
}
