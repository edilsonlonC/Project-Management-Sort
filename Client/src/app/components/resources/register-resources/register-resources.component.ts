import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-resources',
  templateUrl: './register-resources.component.html',
  styleUrls: ['./register-resources.component.css']
})
export class RegisterResourcesComponent implements OnInit {

  constructor() {
    this.recurso = this.createFormGroup();
   }

  get namer() {
    return this.recurso.get('namer');
  }

  get descripcion() {
    return this.recurso.get('descripcion');
  }

  recurso: FormGroup;

  createFormGroup() {
    return new FormGroup({
      namer: new FormControl('', [Validators.required, Validators.minLength(8)]),
      descripcion: new FormControl('', [Validators.maxLength(500)])
    });
  }

  ngOnInit() {}

  onResetForm() {
    this.recurso.reset();
  }

  onSaveForm() {
    if (this.recurso.valid) {
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

}
