import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  blnDisplayMenu!: boolean;
  userDisplayName!: string | null;
  constructor(private authser : AuthService , private router : Router,private appService:AppService){}
  ngDoCheck() {        
    this.blnDisplayMenu = this.appService.blnDisplayMenu;        
    } 
    
    ngOnchanges(): void {
      this.userDisplayName = sessionStorage.getItem('loggedInUser');
      console.log(this.userDisplayName);
    }

  logOut() 
  {
    this.authser.isLoggedIn = false;
    this.appService.blnDisplayMenu = true;
    this.router.navigate(['']);
  }
}
