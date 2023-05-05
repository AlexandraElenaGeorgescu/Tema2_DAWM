import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../../interfaces/phone.interface';
import { PhoneService } from '../../services/phone.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PhoneComponent } from '../phone/phone.component';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  
  phones$!: Observable<Phone[]>;

  constructor(private phoneService: PhoneService, private modal: NzModalService) {}

  ngOnInit(): void {
    this.phones$ = this.phoneService.getPhones();
  }

  loadPhones(): void {
    this.phoneService.getPhones().subscribe((phones: Phone[]) => {
      this.phones$ = of(phones);
    });
  }

  public addPhone(): void {
    const modalRef = this.modal.create({
      nzTitle: 'Add Phone',
      nzContent: PhoneComponent,
      nzComponentParams: {
      },
    });
  
    modalRef.afterClose.subscribe((result: Phone) => {
      if (result) {
        this.phoneService.addPhone(result);
        this.loadPhones();
      }
    });
  }
  
  public editPhone(phone: Phone): void {
    const modalRef = this.modal.create({
      nzTitle: 'Edit Phone',
      nzContent: PhoneComponent,
      nzComponentParams: {
        phone: { ...phone },
      },
    });
  
    modalRef.afterClose.subscribe((result: Phone) => {
      if (result) {
        this.phoneService.updatePhone(result);
        this.loadPhones();
      }
    });
  }
  
}
