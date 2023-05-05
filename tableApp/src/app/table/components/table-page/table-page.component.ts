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
    this.getPhones();
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
  currentPage: number = 1;
  pageSize: number = 8;
  phones!: Phone[];
  
  getPhones(): void {
    this.phoneService.getPhones().subscribe((phones) => {
      this.phones = phones;
    });
  }

  getPaginatedPhones(): Phone[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.phones.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

}
