import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  register: FormGroup;

  constructor() {
    this.register = this.createFormGroup();
   }

  ngOnInit() {}

  onResetForm() {
    this.register.reset();
  }

  onSaveForm() {
    if (this.register.valid) {
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  get name() {
    return this.register.get('name');
  }

  get email() {
    return this.register.get('email');
  }

  get pass() {
    return this.register.get('pass');
  }

}
