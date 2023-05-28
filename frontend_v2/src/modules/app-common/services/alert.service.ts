import { Injectable, OnDestroy } from '@angular/core';
import { Alert } from '@common/models';
import { Observable, Subject } from 'rxjs';

type AlertSubject = { action: 'add' | 'remove', alert: Alert, key: string };

@Injectable({
  providedIn: 'root'
})

export class AlertService implements OnDestroy {
  private alerts: Map<string, Alert[]>;
  private alertChange: Subject<AlertSubject>;

  constructor() {
    this.alerts = new Map<string, Alert[]>();
    this.alertChange = new Subject<AlertSubject>();
  }


  success(message: string, append: boolean = true, title: string = 'Success', key: string = 'm-default', autoDismiss: boolean = false, timeout: number = 0) {
    let alert: Alert = {
      message: message,
      title: title,
      autoDismiss: autoDismiss,
      timeout: timeout,
      type: 'success'
    };

    this.addAlert(key, alert, append);
  }

  info(message: string, append: boolean = true, title: string = 'Information', key: string = 'm-default', autoDismiss: boolean = false, timeout: number = 0) {
    let alert: Alert = {
      message: message,
      title: title,
      autoDismiss: autoDismiss,
      timeout: timeout,
      type: 'info'
    };

    this.addAlert(key, alert, append);
  }

  warn(message: string, append: boolean = true, title: string = 'Warning', key: string = 'm-default', autoDismiss: boolean = false, timeout: number = 0) {
    let alert: Alert = {
      message: message,
      title: title,
      autoDismiss: autoDismiss,
      timeout: timeout,
      type: 'warning'
    };

    this.addAlert(key, alert, append);
  }

  error(message: string, append: boolean = true, title: string = 'Error', key: string = 'm-default', autoDismiss: boolean = false, timeout: number = 0) {
    let alert: Alert = {
      message: message,
      title: title,
      autoDismiss: autoDismiss,
      timeout: timeout,
      type: 'danger'
    };

    this.addAlert(key, alert, append);
  }

  close(alert: Alert, key: string = 'm-default') {
    let _alerts = this.alerts.get(key)!;
    _alerts.splice(_alerts.indexOf(alert), 1);
    this.alertChange.next({ action: 'remove', alert: alert, key: key });
  }

  getAlerts(key: string): Alert[] {
    return this.alerts.get(key) ?? [];
  }

  alertChange$(): Observable<AlertSubject> {
    return this.alertChange.asObservable();
  }

  private addAlert(key: string, alert: Alert, append: boolean = true): void {
    if (!this.alerts.get(key) || !append) {
      this.alerts.set(key, []);
    }

    this.alerts.get(key)!.push(alert);
    if (alert.autoDismiss) {
      setTimeout(() => {
        this.close(alert, key);
      }, alert.timeout);
    }

    this.alertChange.next({ action: 'add', alert: alert, key: key });
  }

  ngOnDestroy(): void {
    this.alertChange.complete();
  }
}
