import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public blnDisplayMenu:boolean;

  constructor() { 
   this.blnDisplayMenu = true;
  }

  ngOnInit() { }
}
