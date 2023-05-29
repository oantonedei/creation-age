import { Component, OnInit } from '@angular/core';
import { CreateParticipantComponent } from '@modules/projects/components/create-participant/create-participant.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit{
  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    
  }

  openCreateParticipantModal(){
    const createParticipantModalRef = this.modalService.open(CreateParticipantComponent);
    const createParticipant = createParticipantModalRef.componentInstance;

    createParticipantModalRef.result.then(()=>{}).catch(()=>{});
  }

}
