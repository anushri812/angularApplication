import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authser : AuthService , private router : Router,private appService:AppService) { }
  userDisplayName!: string | null;
  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedInUser');
    console.log(this.userDisplayName);
  }

}
