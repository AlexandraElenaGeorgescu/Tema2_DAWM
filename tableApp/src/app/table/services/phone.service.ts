import { Injectable } from '@angular/core';
import { Phone } from '../interfaces/phone.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phones: Phone[] = [
    { id: 1, brand: 'Apple', model: 'iPhone 12', storage: 64, price: 799 },
    { id: 2, brand: 'Samsung', model: 'Galaxy S21', storage: 128, price: 699 },
    { id: 3, brand: 'Google', model: 'Pixel 5', storage: 128, price: 699 },
    { id: 4, brand: 'OnePlus', model: '9 Pro', storage: 256, price: 969 },
    { id: 5, brand: 'Xiaomi', model: 'Mi 11', storage: 256, price: 749 },
    { id: 6, brand: 'Motorola', model: 'Moto G Power (2021)', storage: 64, price: 199 },
  ];

  getPhones(): Observable<Phone[]> {
    // simulate delay of fetching data from API
    return of(this.phones).pipe(delay(1000));
  }

  addPhone(phone: Phone): void {
    phone.id = this.phones.length + 1;
    this.phones.push(phone);
  }

  updatePhone(phone: Phone): void {
    const index = this.phones.findIndex((p) => p.id === phone.id);
    if (index !== -1) {
      this.phones[index] = phone;
    }
  }

  deletePhone(id: number): void {
    const index = this.phones.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.phones.splice(index, 1);
    }
  }
}
