import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CryptoCallService {
  crypt=new Subject<any>;
  cryptData:any;

  constructor() { }
}
