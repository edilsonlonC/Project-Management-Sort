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

  get descripcionr() {
    return this.recurso.get('descripcionr');
  }

  get proyector() {
    return this.recurso.get('proyector');
  }

  get responsabler() {
    return this.recurso.get('responsabler');
  }

  get estador() {
    return this.recurso.get('estador');
  }

  get prioridadr() {
    return this.recurso.get('prioridadr');
  }

  get dependenciar() {
    return this.recurso.get('dependenciar');
  }

  get dater() {
    return this.recurso.get('dater');
  }

  recurso: FormGroup;

  createFormGroup() {
    return new FormGroup({
      namer: new FormControl('', [Validators.required]),
      descripcionr: new FormControl('', [Validators.maxLength(500)]),
      proyector: new FormControl('', [Validators.required]),
      responsabler: new FormControl('', [Validators.required]),
      estador: new FormControl('', [Validators.required]),
      prioridadr: new FormControl('', [Validators.required]),
      dependenciar: new FormControl('', [Validators.required]),
      dater: new FormControl('', [Validators.required])
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
