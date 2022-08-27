import { Injectable } from '@angular/core';
import {Owner} from '../modal/owner';
import { from, Observable } from 'rxjs';

const OWNER_DATA: Owner[] = [
 new Owner("1001","anushri","whu8tyr3tr76"),
 new Owner("1002","boho2hrhu","yhu8tyr3tr76"),
 new Owner("1003","cejo2ijro","zhu8tyr3tr76"),
 new Owner("1004","dojiro2ijr","nhu8tyr3tr76"),
 new Owner("1005","ejefnk","phu8tyr3tr76"),
 new Owner("1006","fokofno3nf","shu8tyr3tr76"),
];

@Injectable({
  providedIn: 'root'
})
export class OwnerDetailsService {

  constructor() { }
  getOwnerList() : Observable<Owner>{
    const obsfrom1 = from(OWNER_DATA);
    return obsfrom1;
  }
}
