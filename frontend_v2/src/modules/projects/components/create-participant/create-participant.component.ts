import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.scss'],
})
export class CreateParticipantComponent implements OnInit {
  @Input() id!: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  projectsService = inject(ProjectsService);

  participantForm = inject(FormBuilder).nonNullable.group({
    skill: ['', Validators.required],
    percentage_offered: ['', Validators.required],
    contract_type: ['', Validators.required],
  });

  constructor(private activeModal: NgbActiveModal) {}
  ngOnInit(): void {}

  submitForm() {
    this.projectsService
      .addParticipant(
        this.id,
        this.participantForm.value as unknown as {
          skill: string;
          percentage_offered: number;
          contract_type: string;
        }
      )
      .subscribe((response) => {
        if (response.success) {
          this.activeModal.close();
          this.passBack(response.contract);
        }
      });
  }
  passBack(contract: any) {
    this.passEntry.emit(contract);
  }
  dismiss() {
    this.activeModal.dismiss();
  }
}
