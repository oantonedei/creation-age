import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
