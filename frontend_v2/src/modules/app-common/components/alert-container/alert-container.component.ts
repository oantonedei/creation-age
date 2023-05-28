import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Alert } from '@common/models';
import { AlertService } from '@common/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit, OnDestroy {
  @Input() key: string = 'm-default';
  alerts: Alert[] = [];
  alertSub!: Subscription;

  constructor(private alertService: AlertService) {
    //this.alerts = this.alertService.getAlerts(this.key);
  }

  ngOnInit(): void {
    this.alertSub = this.alertService.alertChange$().subscribe((changeObject) => {
      if (changeObject.key == this.key) {
        this.alerts = this.alertService.getAlerts(this.key);
      }
    });
  }

  close(alert: Alert) {
    this.alertService.close(alert, this.key);
  }

  getIcon(alertType: string) {
    switch (alertType) {
      case 'info':
        return 'fa fa-info-circle';
      case 'warning':
        return 'fa fa-exclamation-triangle';
      case 'success':
        return 'fa fa-check-circle';
      case 'danger':
        return 'fa fa-times-circle';
      default:
        return '';
    }
  }

  ngOnDestroy(): void {
    this.alertSub.unsubscribe();
  }

}
