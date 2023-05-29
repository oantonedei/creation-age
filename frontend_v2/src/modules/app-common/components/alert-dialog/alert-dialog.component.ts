import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
@Input() title:string='Alert';
@Input() message!:string;
@Input() okText:string='OK';
@Input() cancelText:string='Cancel';
@Input() image:string='';

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
