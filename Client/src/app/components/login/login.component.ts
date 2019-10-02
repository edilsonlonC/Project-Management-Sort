import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0,
    rol: 'administrador',
    name: '',
    lastname: '',
    password: '',
    email: ''
  };
   // tslint:disable-next-line: max-line-length
   emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  login: FormGroup;
  status: string;
  identidad: any;
  token: any;

   createFormGroup() {
     return new FormGroup({
       email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
       pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)])
     });
   }

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.login = this.createFormGroup();
    localStorage.clear();
   }

  ngOnInit() {}

  onResetForm() {
    this.login.reset();
  }

  onForm() {
    this.user.email = this.login.get('email').value;
    this.user.password = this.login.get('pass').value;
    delete this.user.id;
    delete this.user.rol;
    delete this.user.name;
    delete this.user.lastname;
  }

  onSaveForm() {
    if (this.login.valid) {
      this.onForm();
      this.usersService.signUp(this.user).subscribe(
        res => {
          this.identidad = res.user;
          this.token = res.token;
          localStorage.setItem('identidad', JSON.stringify(this.identidad));
          localStorage.setItem('token', this.token);
          this.router.navigate(['/home']);
        },
        err => {
          alert('Error: Inicio de sesión');
          console.log(err);
      });
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
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

}
