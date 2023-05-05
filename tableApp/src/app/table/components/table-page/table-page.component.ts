import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../../interfaces/phone.interface';
import { PhoneService } from '../../services/phone.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  
  phones$: Observable<Phone[]> | undefined;

  constructor(private phoneService: PhoneService, private modal: NzModalService) {}

  ngOnInit(): void {
    this.phones$ = this.phoneService.getPhones();
  }
}
