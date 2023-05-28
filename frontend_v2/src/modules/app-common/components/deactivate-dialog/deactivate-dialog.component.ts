import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deactivate-dialog',
  templateUrl: './deactivate-dialog.component.html',
  styleUrls: ['./deactivate-dialog.component.scss']
})
export class DeactivateDialogComponent {


  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
  ) {
  }

  dismiss() {
    this.activeModal.close({ result: false, comment: null });
  }

}
