import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    rol: 2,
    name: '',
    lastname: '',
    password: '',
    email: ''
  };
  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  register: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  constructor(private usersService: UsersService, private router: Router) {
    this.register = this.createFormGroup();
  }

  ngOnInit() {}

  onResetForm() {
    this.register.reset();
  }

  onForm() {
    this.user.name = this.register.get('name').value;
    this.user.lastname = this.register.get('lastname').value;
    this.user.email = this.register.get('email').value;
    this.user.password = this.register.get('pass').value;
    delete this.user.id;
  }

  onSaveForm() {
    if (this.register.valid) {
      this.onForm();
      this.usersService.saveUser(this.user).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
          alert('Usuario Registrado');
        },
        err => console.log(err)
      );
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  get name() {
    return this.register.get('name');
  }

  get lastname() {
    return this.register.get('lastname');
  }

  get email() {
    return this.register.get('email');
  }

  get pass() {
    return this.register.get('pass');
  }
}
