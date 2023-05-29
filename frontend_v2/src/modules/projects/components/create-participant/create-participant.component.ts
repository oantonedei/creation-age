import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.scss']
})
export class CreateParticipantComponent implements OnInit{

  constructor(private activeModal:NgbActiveModal){}
  ngOnInit(): void {
    
  }

  dismiss(){
    this.activeModal.dismiss();
  }

}
