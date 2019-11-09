import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UAW } from 'src/app/models/uaw';
import { UUCW } from 'src/app/models/uucw';

@Component({
  selector: 'app-casos-de-uso',
  templateUrl: './casos-de-uso.component.html',
  styleUrls: ['./casos-de-uso.component.css']
})
export class CasosDeUsoComponent implements OnInit {

  uaw: UAW = {
    simpleUAW: 0,
    medioUAW: 0,
    complejoUAW: 0,
    resultUAW: 0
  };

  uucw: UUCW = {
    simpleUUCW: 0,
    medioUUCW: 0,
    complejoUUCW: 0,
    resultUUCW: 0
  };

  UUCP: number;

  formUAW: FormGroup;
  formUUCW: FormGroup;

  createFormGroup() {
    return new FormGroup({
      simpleUAW: new FormControl(0, Validators.required),
      medioUAW: new FormControl(0, Validators.required),
      complejoUAW: new FormControl(0, Validators.required),
      resultUAW: new FormControl(0, Validators.required)
    });
  }

  createFormGroup0() {
    return new FormGroup({
      simpleUUCW: new FormControl(0, Validators.required),
      medioUUCW: new FormControl(0, Validators.required),
      complejoUUCW: new FormControl(0, Validators.required),
      resultUUCW: new FormControl(0, Validators.required)
    });
  }

  constructor() {
    this.formUAW = this.createFormGroup();
    this.formUUCW = this.createFormGroup0();
  }

  ngOnInit() {
  }

  onSetForm() {
    this.uaw.simpleUAW = this.formUAW.get('simpleUAW').value;
    this.uaw.medioUAW = this.formUAW.get('medioUAW').value;
    this.uaw.complejoUAW = this.formUAW.get('complejoUAW').value;
    this.uucw.simpleUUCW = this.formUUCW .get('simpleUUCW').value;
    this.uucw.medioUUCW = this.formUUCW .get('medioUUCW').value;
    this.uucw.complejoUUCW = this.formUUCW .get('complejoUUCW').value;
    this.uaw.resultUAW = (1 * this.uaw.simpleUAW) + (2 * this.uaw.medioUAW) + (3 * this.uaw.complejoUAW);
    this.uucw.resultUUCW = (5 * this.uucw.simpleUUCW) + (10 * this.uucw.medioUUCW) + (15 * this.uucw.complejoUUCW);
    this.formUAW.get('resultUAW').setValue(this.uaw.resultUAW);
    this.formUUCW.get('resultUUCW').setValue(this.uucw.resultUUCW);
    this.UUCP = this.uaw.resultUAW + this.uucw.resultUUCW;
  }

  get simpleUAW() {
    return this.formUAW.get('simpleUAW');
  }

  get medioUAW() {
    return this.formUAW.get('medioUAW');
  }

  get complejoUAW() {
    return this.formUAW.get('complejoUAW');
  }

  get resultUAW() {
    return this.formUAW.get('resultUAW');
  }

  get simpleUUCW() {
    return this.formUUCW.get('simpleUUCW');
  }

  get medioUUCW() {
    return this.formUUCW.get('medioUUCW');
  }

  get complejoUUCW() {
    return this.formUUCW.get('complejoUUCW');
  }

  get resultUUCW() {
    return this.formUUCW.get('resultUUCW');
  }

}
