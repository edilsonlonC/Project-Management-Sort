import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  project: FormGroup;

  createFormGroup() {
    return new FormGroup({
      namep: new FormControl('', [Validators.required, Validators.minLength(8)]),
      director: new FormControl('', [Validators.required, Validators.minLength(8)]),
      date: new FormControl('', [Validators.required])
    });
  }

  constructor() {
    this.project = this.createFormGroup();
  }

  ngOnInit() {}

  onResetForm() {
    this.project.reset();
   }

  onSaveForm() {
    if (this.project.valid) {
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }
  }

  get namep() {
    return this.project.get('namep');
  }

  get director() {
    return this.project.get('director');
  }

  get date() {
    return this.project.get('date');
  }

}
