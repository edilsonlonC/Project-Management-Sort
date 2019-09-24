import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    this.login = this.createFormGroup();
   }

  get name() {
    return this.login.get('name');
  }

  get email() {
    return this.login.get('email');
  }

  get pass() {
    return this.login.get('pass');
  }

  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  login: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  ngOnInit() {}

  onResetForm() {
    this.login.reset();
  }

  onSaveForm() {
    if (this.login.valid) {
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

}
