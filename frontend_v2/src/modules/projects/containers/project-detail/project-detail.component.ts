import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { CreateParticipantComponent } from '@modules/projects/components/create-participant/create-participant.component';
import IContractState from '@modules/projects/models/IContractState.interface';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy{
  projectsService = inject(ProjectsService);
  projectState!: IMediaState;
  contracts!: IContractState[];
  router = inject(Router);
  count = 0;

  constructor(private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.pipe(
        map((params) => params.get('projectId') as string),
        mergeMap((id) => this.projectsService.getMediaById(id))
      )
      .subscribe((response) => {
        this.projectState = response.results;  
        this.contracts = response.contracts;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.count = 0;
  }

  openCreateParticipantModal(){
    const createParticipantModalRef = this.modalService.open(CreateParticipantComponent);
    createParticipantModalRef.componentInstance.id = this.projectState._id;

    createParticipantModalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.contracts.push(receivedEntry);
    });
  }

}
