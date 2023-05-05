import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './table-page/table-page.component';
import { PhoneComponent } from './phone/phone.component';
import { PaginationPipe } from './pipes/pagination.pipe';



@NgModule({
  declarations: [
    TablePageComponent,
    PhoneComponent,
    PaginationPipe
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
