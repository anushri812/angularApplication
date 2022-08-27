import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authser : AuthService , private router : Router) { }
  userDisplayName!: string | null;
  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedInUser');
    console.log(this.userDisplayName);
  }
  
  logOut() 
  {
    this.authser.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
