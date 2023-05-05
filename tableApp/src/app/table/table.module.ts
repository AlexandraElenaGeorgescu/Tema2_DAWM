import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './components/table-page/table-page.component';
import { PhoneComponent } from './components/phone/phone.component';
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
