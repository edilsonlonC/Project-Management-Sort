import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-resources',
  templateUrl: './register-resources.component.html',
  styleUrls: ['./register-resources.component.css']
})
export class RegisterResourcesComponent implements OnInit {

  recurso: FormGroup;
  actividad: FormGroup;

  createFormGroupR() {
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

  createFormGroupA() {
    return new FormGroup({
      namea: new FormControl('', [Validators.required]),
      descripciona: new FormControl('', [Validators.maxLength(500)]),
      proyectoa: new FormControl('', [Validators.required]),
      responsablea: new FormControl('', [Validators.required]),
      estadoa: new FormControl('', [Validators.required]),
      prioridada: new FormControl('', [Validators.required]),
      dependenciaa: new FormControl('', [Validators.required]),
      datea: new FormControl('', [Validators.required])
    });
  }

  constructor() {
    this.recurso = this.createFormGroupR();
    this.actividad = this.createFormGroupA();
   }

   ngOnInit() {}

   onResetFormR() {
     this.recurso.reset();
   }

   onResetFormA() {
     this.actividad.reset();
   }

   onSaveFormR() {
     if (this.recurso.valid) {
       this.onResetFormR();
       console.log('Valid');
     } else {
       console.log('Not Valid');
     }
   }

   onSaveFormA() {
     if (this.actividad.valid) {
       this.onResetFormA();
       console.log('Valid');
     } else {
       console.log('Not Valid');
     }
   }

  get namer() {
    return this.recurso.get('namer');
  }

  get namea() {
    return this.actividad.get('namea');
  }

  get descripcionr() {
    return this.recurso.get('descripcionr');
  }

  get descripciona() {
    return this.actividad.get('descripciona');
  }

  get proyector() {
    return this.recurso.get('proyector');
  }

  get proyectoa() {
    return this.actividad.get('proyectoa');
  }

  get responsabler() {
    return this.recurso.get('responsabler');
  }

  get responsablea() {
    return this.actividad.get('responsablea');
  }

  get estador() {
    return this.recurso.get('estador');
  }

  get estadoa() {
    return this.actividad.get('estadoa');
  }

  get prioridadr() {
    return this.recurso.get('prioridadr');
  }

  get prioridada() {
    return this.actividad.get('prioridada');
  }

  get dependenciar() {
    return this.recurso.get('dependenciar');
  }

  get dependenciaa() {
    return this.actividad.get('dependenciaa');
  }

  get dater() {
    return this.recurso.get('dater');
  }

  get datea() {
    return this.actividad.get('datea');
  }

}
