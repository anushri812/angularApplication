import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private authser : AuthService, private router:Router,private appService : AppService
    ,private route:ActivatedRoute,private fb: FormBuilder) { }
  infoMessage = '';
  ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          if(params?.['registered'] !== undefined && params?.['registered'] === 'true') {
              this.infoMessage = 'Registration Successful! Please Login!';
          }
        });
        this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
  isAuthorizedUser : boolean = false;

  submit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      console.log(this.form.value.username,this.form.value.password);
     this.isAuthorizedUser= this.authser.verifyUserCredentials(this.form.value.username,this.form.value.password);
     if(this.isAuthorizedUser)
     {
      this.appService.blnDisplayMenu = false;
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
