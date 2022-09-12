import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  submit(){
    this.router.navigate(['login'], {queryParams: { registered: 'true' } });
  }
  createForm() {
    this.form = this.fb.group({
      name: new  FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      useremail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')]),
      confirmpassword: new FormControl('',Validators.pattern("((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})"))
    });
  }

}
