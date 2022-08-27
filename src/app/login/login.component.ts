import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authser : AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  isAuthorizedUser : boolean = false;

  submit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      console.log(this.form.value.username,this.form.value.password);
     this.isAuthorizedUser= this.authser.verifyUserCredentials(this.form.value.username,this.form.value.password);
     if(this.isAuthorizedUser)
     {
      sessionStorage.setItem('loggedInUser',this.form.value.username);
      this.router.navigate(['/home']);
     }
     else{
       this.router.navigate(['/login']);
     }
    }
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();
}
