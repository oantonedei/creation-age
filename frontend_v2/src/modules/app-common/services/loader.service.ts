import { Injectable, OnDestroy } from '@angular/core';
import { LoaderComponent } from '@common/components';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnDestroy{
  loaderModal!: NgbModalRef;
  loaderComponent!:LoaderComponent;

  constructor(
    private modalService: NgbModal
  ) { }

  showLoader(message:string='Loading...'){
    if(!this.loaderModal){
      this.openModal(message);
    }
  }
  hideLoader(resetLoader:boolean=true){
    if(this.loaderModal){
      this.loaderModal.dismiss();
      this.loaderModal = null!;
      this.loaderComponent = null!;
    }
  }
  setMessage(message:string){
    if(this.loaderModal){
      this.loaderComponent.message = message;
    }
  }

  openModal(message:string){
    this.loaderModal = this.modalService.open(LoaderComponent, { size: 'sm' });
    this.loaderComponent = this.loaderModal.componentInstance as LoaderComponent;
    this.loaderComponent.message = message;
    this.loaderModal.result.then((data) => { }).catch(err => { });
  }

  ngOnDestroy(): void {
  }
}
