import { Injectable } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
// spinner docs: https://napster2210.github.io/ngx-spinner/
  defaultConfig: Spinner = {
    showSpinner: true,
    type: 'ball-clip-rotate-multiple',
    bdColor: 'rgba(255,255,255,0.7)',
    color: '#00678c'
  };

  constructor(private spinner: NgxSpinnerService) {}

  startSpinner(): void {
    this.spinner.show(undefined, this.defaultConfig);
  }

  startSpinnerWithName(name: string): void {
    this.spinner.show(name);
  }

  stopSpinnerWithName(name: string): void {
    this.spinner.hide(name);
  }

  stopSpinner(): void {
    this.spinner.hide();
  }
}
