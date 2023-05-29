import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() title:string='Confirm Action';
  @Input() message!:string;
  @Input() okText:string='Yes';
  @Input() cancelText:string='No';
  @Input() image:string='';
  @Input() commentRequired:boolean=true;
  @Input() displayComment:boolean=false;
  @Input() commentLabel:string='Comment';
  
  comment!: FormControl;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.comment =new FormControl('', this.commentRequired && this.displayComment?[Validators.required]:[]);
  }

  dismiss() {
    this.activeModal.close({result:false, comment:null});
  }

  submit(){
    if(!this.comment.valid){
      this.comment.markAsTouched();
    }else{
      this.activeModal.close({result:true, comment:this.comment.value});
    }
  }
}
