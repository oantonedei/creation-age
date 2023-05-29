import { Injectable } from '@angular/core';
import { NavigationEnd, Event, NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class NavLoaderService {

  constructor(private router:Router, private spinnerService: SpinnerService) { 
    
  }

  public sub(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.spinnerService.startSpinner();
      }

      if (event instanceof NavigationEnd) {
        this.spinnerService.stopSpinner();
      }
    });
  }
}
