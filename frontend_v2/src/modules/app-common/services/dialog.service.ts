import { Injectable } from '@angular/core';
import { AlertDialogComponent, ConfirmDialogComponent } from '@common/components';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private modalService: NgbModal
  ) { }

  showAlert(title: string, message?: string, image?: string, okText: string='Okay', size='md'): Observable<{ result: boolean, comment: string | null }> {
    return new Observable((observer) => {
      let alertModal = this.modalService.open(AlertDialogComponent, { size: size });
      let alertComponent = alertModal.componentInstance as AlertDialogComponent;
      alertComponent.title = title;
      if (message) alertComponent.message = message;
      if (image) alertComponent.image = image;
      if (okText) alertComponent.okText = okText;

      alertModal.result.then((data) => {
        observer.next(data);
        observer.complete();
      }).catch(err => {
        observer.next({result:false, comment:null});
        observer.complete();
       });
    });
  }

  showConfirm(title: string, message?: string, image?: string, 
    displayComment?:boolean, commentLabel?:string, commentRequired?:boolean,
     okText?: string, cancelText?:string): Observable<{ result: boolean, comment: string | null }> {
    return new Observable((observer) => {
      let confirmModal = this.modalService.open(ConfirmDialogComponent, { size: 'md' });
      let confirmComponent = confirmModal.componentInstance as ConfirmDialogComponent;
      confirmComponent.title = title;
      if (message) confirmComponent.message = message;
      if (image) confirmComponent.image = image;
      if(displayComment) confirmComponent.displayComment=displayComment;
      if(commentLabel) confirmComponent.commentLabel=commentLabel;
      if(commentRequired) confirmComponent.commentRequired=commentRequired;
      if (okText) confirmComponent.okText = okText;
      if(cancelText) confirmComponent.cancelText=cancelText;

      confirmModal.result.then((data) => {
        observer.next(data);
        observer.complete();
      }).catch(err => { 
        observer.next({result:false, comment:null});
        observer.complete();
      });
    });
  }

}
