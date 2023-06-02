import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignContractComponent } from '@modules/explore/components/sign-contract/sign-contract.component';
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { ExploreService } from '@modules/explore/services/explore.service';
import IContractState from '@modules/projects/models/IContractState.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent implements OnDestroy {
  exploreService = inject(ExploreService);
  mediaState!: IMediaState;
  contracts!: IContractState[];
  count = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id') as string),
        mergeMap((id) => this.exploreService.getMediaById(id))
      )
      .subscribe((response) => {
        this.mediaState = response.results;
        this.contracts = response.contracts;
        localStorage.setItem(
          'MEDIA_STATE',
          JSON.stringify(this.mediaState.name)
        );
      });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('MEDIA_STATE');
    this.count = 0;
  }

  openContractModal(id: String) {
    const signContractModalRef = this.modalService.open(SignContractComponent);
    signContractModalRef.componentInstance.id = id;

    signContractModalRef.componentInstance.passEntry.subscribe(
      (receivedEntry: any) => {
        this.contracts.map((contract) => {
          if (contract._id === receivedEntry) {
            contract.contract_status = 'signed';
          }
        });
      }
    );
  }
}
