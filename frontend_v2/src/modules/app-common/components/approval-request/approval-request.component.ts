import { Component, OnInit } from '@angular/core';
import { ToastService } from '@common/services';

@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.scss']
})
export class ApprovalRequestComponent implements OnInit {

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
  }

  view() {
    this.toast.error('Hello!');
  }
}
