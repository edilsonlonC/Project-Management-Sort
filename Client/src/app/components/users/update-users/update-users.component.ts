import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  user: User = {
    id: 0,
    rol: 0,
    name: '',
    lastname: '',
    password: '',
    email: ''
  };

  getUser: any = {};

  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  actualizar: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      rol: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  constructor(private usersService: UsersService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroup();
    this.getUser = this.homeComponent.getUser();
  }

  ngOnInit() {
    this.onActualizar();
  }

  onActualizar() {
    this.actualizar.get('name').setValue(this.getUser.Nombre_usuario);
    this.actualizar.get('lastname').setValue(this.getUser.Apellido_usuario);
    this.actualizar.get('email').setValue(this.getUser.Correo);
    this.actualizar.get('rol').setValue(this.getUser.Rol_Usuario_id_Rol_Usuario);
  }

  onResetForm() {
    this.actualizar.reset();
  }

  onForm() {
    this.user.name = this.actualizar.get('name').value;
    this.user.lastname = this.actualizar.get('lastname').value;
    this.user.email = this.actualizar.get('email').value;
    this.user.password = this.actualizar.get('pass').value;
    this.user.rol = this.actualizar.get('rol').value;
    delete this.user.id;
  }

  onUpdateForm() {
    if (this.actualizar.valid) {
      this.onForm();
      this.usersService.updateUser(this.getUser.id_usuarios, this.user).subscribe(
        res => {
          console.log(res);
          alert('Usuario Actualizado');
          this.router.navigate(['/home/users']);
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
    return this.actualizar.get('name');
  }

  get lastname() {
    return this.actualizar.get('lastname');
  }

  get email() {
    return this.actualizar.get('email');
  }

  get rol() {
    return this.actualizar.get('rol');
  }

  get pass() {
    return this.actualizar.get('pass');
  }
}
