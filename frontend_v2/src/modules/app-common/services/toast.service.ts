import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  info(message: string, title: string = 'Information') {
    this.toastr.info(message, title);
  }

  success(message: string, title: string = 'Success') {
    this.toastr.success(message, title);
  }

  warn(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title);
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title);
  }

  clear() {
    this.toastr.clear();
  }
}
