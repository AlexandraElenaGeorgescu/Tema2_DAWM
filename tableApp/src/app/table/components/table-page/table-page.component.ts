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

  constructor(private phoneService: PhoneService, private modal: NzModalService, ) {}

  ngOnInit(): void {
    this.loadPhones();
  }

  loadPhones(): void {
    this.phones$ = this.phoneService.getPhones();
  }

  public addPhone(): void {
    const modalRef = this.modal.create({
      nzTitle: 'Add Phone',
      nzContent: PhoneComponent,
      nzComponentParams: {},
      nzOnOk: () => {
        const phoneComponent = modalRef.getContentComponent() as PhoneComponent;
        phoneComponent.submitForm();
        const newPhone = phoneComponent.newPhone;
        if (newPhone) {
          this.phoneService.addPhone(newPhone);
          this.loadPhones();
          console.log(this.phones$)
        }
      }
    })
  
    modalRef.afterClose.subscribe((result: Phone) => {
      if (result) {
        this.phoneService.addPhone(result);
        this.loadPhones();
        console.log(this.phones$)
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
      nzOnOk: () => {
        const phoneComponent = modalRef.getContentComponent() as PhoneComponent;
        phoneComponent.submitForm();
        const newPhone = phoneComponent.newPhone;
        if (newPhone) {
          this.phoneService.updatePhone(newPhone);
          this.loadPhones();
        }
      }
      
    });    
  
    modalRef.afterClose.subscribe((result: Phone) => {
      if (result) {
        this.phoneService.updatePhone(result);
        this.loadPhones();
        console.log(this.phones$)
      }
    });
    
  }
  
}
