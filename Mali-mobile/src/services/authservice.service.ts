import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  login(value: any) {
    throw new Error('Method not implemented.');
  }
  isEmailVerified: any;
  constructor() { }
}
