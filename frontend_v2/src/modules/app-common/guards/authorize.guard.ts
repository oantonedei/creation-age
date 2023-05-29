import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
	constructor(private router: Router) {

	}
	authUserSub!: Subscription;
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return new Observable((observer) => {
			observer.next(true);
			observer.complete();
		});
	}
}
