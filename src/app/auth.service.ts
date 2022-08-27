import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private router: Router) { }
  isLoggedIn : boolean = false;
  verifyUserCredentials(username:string, password:string) : boolean{
    console.log(username,password,"from service");
    if(username == "admin" && password == "admin")
    {
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
  
}
