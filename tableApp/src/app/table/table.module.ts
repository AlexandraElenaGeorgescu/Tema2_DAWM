import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './components/table-page/table-page.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { AppRoutingModule } from '../app-routing.module';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [
    TablePageComponent,
    PhoneComponent,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzMessageModule,
    NzModalModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TableModule { }
