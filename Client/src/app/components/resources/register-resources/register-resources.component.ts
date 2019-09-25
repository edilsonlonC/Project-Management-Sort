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
  funcionalidad: FormGroup;
  tarea: FormGroup;

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

  createFormGroupF() {
    return new FormGroup({
      namef: new FormControl('', [Validators.required]),
      descripcionf: new FormControl('', [Validators.maxLength(500)]),
      proyectof: new FormControl('', [Validators.required]),
      responsablef: new FormControl('', [Validators.required]),
      estadof: new FormControl('', [Validators.required]),
      prioridadf: new FormControl('', [Validators.required]),
      dependenciaf: new FormControl('', [Validators.required]),
      datef: new FormControl('', [Validators.required])
    });
  }

  createFormGroupT() {
    return new FormGroup({
      namet: new FormControl('', [Validators.required]),
      descripciont: new FormControl('', [Validators.maxLength(500)]),
      proyectot: new FormControl('', [Validators.required]),
      responsablet: new FormControl('', [Validators.required]),
      estadot: new FormControl('', [Validators.required]),
      prioridadt: new FormControl('', [Validators.required]),
      dependenciat: new FormControl('', [Validators.required]),
      datet: new FormControl('', [Validators.required])
    });
  }

  constructor() {
    this.recurso = this.createFormGroupR();
    this.actividad = this.createFormGroupA();
    this.funcionalidad = this.createFormGroupF();
    this.tarea = this.createFormGroupT();
  }

  ngOnInit() {}

  onResetFormR() {
    this.recurso.reset();
  }

  onResetFormA() {
    this.actividad.reset();
  }

  onResetFormF() {
    this.funcionalidad.reset();
  }

  onResetFormT() {
    this.tarea.reset();
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

  onSaveFormF() {
    if (this.funcionalidad.valid) {
      this.onResetFormF();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  onSaveFormT() {
    if (this.tarea.valid) {
      this.onResetFormT();
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

  get namef() {
    return this.funcionalidad.get('namef');
  }

  get namet() {
    return this.tarea.get('namet');
  }

  get descripcionr() {
    return this.recurso.get('descripcionr');
  }

  get descripciona() {
    return this.actividad.get('descripciona');
  }

  get descripcionf() {
    return this.funcionalidad.get('descripcionf');
  }

  get descripciont() {
    return this.tarea.get('descripciont');
  }

  get proyector() {
    return this.recurso.get('proyector');
  }

  get proyectoa() {
    return this.actividad.get('proyectoa');
  }

  get proyectof() {
    return this.funcionalidad.get('proyectof');
  }

  get proyectot() {
    return this.tarea.get('proyectot');
  }

  get responsabler() {
    return this.recurso.get('responsabler');
  }

  get responsablea() {
    return this.actividad.get('responsablea');
  }

  get responsablef() {
    return this.funcionalidad.get('responsablef');
  }

  get responsablet() {
    return this.tarea.get('responsablet');
  }

  get estador() {
    return this.recurso.get('estador');
  }

  get estadoa() {
    return this.actividad.get('estadoa');
  }

  get estadof() {
    return this.funcionalidad.get('estadof');
  }

  get estadot() {
    return this.tarea.get('estadot');
  }

  get prioridadr() {
    return this.recurso.get('prioridadr');
  }

  get prioridada() {
    return this.actividad.get('prioridada');
  }

  get prioridadf() {
    return this.funcionalidad.get('prioridadf');
  }

  get prioridadt() {
    return this.tarea.get('prioridadt');
  }

  get dependenciar() {
    return this.recurso.get('dependenciar');
  }

  get dependenciaa() {
    return this.actividad.get('dependenciaa');
  }

  get dependenciaf() {
    return this.funcionalidad.get('dependenciaf');
  }

  get dependenciat() {
    return this.tarea.get('dependenciat');
  }

  get dater() {
    return this.recurso.get('dater');
  }

  get datea() {
    return this.actividad.get('datea');
  }

  get datef() {
    return this.funcionalidad.get('datef');
  }

  get datet() {
    return this.tarea.get('datet');
  }

}
