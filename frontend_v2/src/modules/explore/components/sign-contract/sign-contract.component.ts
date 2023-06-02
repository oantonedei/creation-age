import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ExploreService } from '@modules/explore/services/explore.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-contract',
  templateUrl: './sign-contract.component.html',
  styleUrls: ['./sign-contract.component.scss'],
})
export class SignContractComponent {
  @Input() id!: String;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  exploreService = inject(ExploreService);

  constructor(private activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  signContract() {
    this.exploreService.signContract(this.id).subscribe((response) => {
      if (response.success) {
        this.activeModal.close();
        this.passBack();
      }
    });
  }

  passBack() {
    this.passEntry.emit(this.id);
  }
}
