import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { CasosDeUsoService } from 'src/app/services/casos-de-uso.service';
import { UAW } from 'src/app/models/uaw';
import { UUCW } from 'src/app/models/uucw';
import { TFC } from 'src/app/models/tfc';
import { EF } from 'src/app/models/ef';
import { E } from 'src/app/models/e';
import { ETCVDS } from 'src/app/models/etcvds';
import { PuntosCasosUsos } from 'src/app/models/pcu';

@Component({
  selector: 'app-casos-de-uso',
  templateUrl: './casos-de-uso.component.html',
  styleUrls: ['./casos-de-uso.component.css']
})
export class CasosDeUsoComponent implements OnInit {

  projects: any = {};

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
  banderaUUCP = false;

  tfc: TFC = {
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,
    t6: 0,
    t7: 0,
    t8: 0,
    t9: 0,
    t10: 0,
    t11: 0,
    t12: 0,
    t13: 0,
    tFactor: 0,
    resultTFC: 0
  };

  ef: EF = {
    e1: 0,
    e2: 0,
    e3: 0,
    e4: 0,
    e5: 0,
    e6: 0,
    e7: 0,
    e8: 0,
    eFactor: 0,
    resultEF: 0
  };

  UCP: number;
  banderaUCP = false;

  e: E = {
    f1: 0,
    f2: 0,
    total: 0,
    resultPF: 0
  };

  E: number;

  etcvds: ETCVDS = {
    analisis: 0,
    diseno: 0,
    desarrollo: 0,
    pruebas: 0,
    gestion: 0,
    eTotal: 0
  };

  pcu: PuntosCasosUsos = {
    idProject: 0,
    UUCP: 0,
    UCP: 0,
    E: 0
  };

  formUAW: FormGroup;
  formUUCW: FormGroup;
  formTFC: FormGroup;
  formEF: FormGroup;
  formE: FormGroup;
  formP: FormGroup;

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

  createFormGroup1() {
    return new FormGroup({
      t1: new FormControl(0, Validators.required),
      t2: new FormControl(0, Validators.required),
      t3: new FormControl(0, Validators.required),
      t4: new FormControl(0, Validators.required),
      t5: new FormControl(0, Validators.required),
      t6: new FormControl(0, Validators.required),
      t7: new FormControl(0, Validators.required),
      t8: new FormControl(0, Validators.required),
      t9: new FormControl(0, Validators.required),
      t10: new FormControl(0, Validators.required),
      t11: new FormControl(0, Validators.required),
      t12: new FormControl(0, Validators.required),
      t13: new FormControl(0, Validators.required),
      tFactor: new FormControl(0, Validators.required),
      resultTFC: new FormControl(0, Validators.required)
    });
  }

  createFormGroup2() {
    return new FormGroup({
      e1: new FormControl(0, Validators.required),
      e2: new FormControl(0, Validators.required),
      e3: new FormControl(0, Validators.required),
      e4: new FormControl(0, Validators.required),
      e5: new FormControl(0, Validators.required),
      e6: new FormControl(0, Validators.required),
      e7: new FormControl(0, Validators.required),
      e8: new FormControl(0, Validators.required),
      eFactor: new FormControl(0, Validators.required),
      resultEF: new FormControl(0, Validators.required)
    });
  }

  createFormGroup3() {
    return new FormGroup({
      f1: new FormControl(0, Validators.required),
      f2: new FormControl(0, Validators.required),
      total: new FormControl(0, Validators.required),
      resultPF: new FormControl(0, Validators.required)
    });
  }

  createFormGroup4() {
    return new FormGroup({
      idProject: new FormControl(1, Validators.required)
    });
  }

  constructor(private projectsService: ProjectsService, private casosDeUsoService: CasosDeUsoService) {
    this.formUAW = this.createFormGroup();
    this.formUUCW = this.createFormGroup0();
    this.formTFC = this.createFormGroup1();
    this.formEF = this.createFormGroup2();
    this.formE = this.createFormGroup3();
    this.formP = this.createFormGroup4();
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
      },
      err => console.log(err)
    );
  }

  saveEstimate() {
    this.casosDeUsoService.saveEstimate(this.pcu).subscribe(
      res => {
        this.projects = res;
        console.log(res);
        alert('Estimacion Realizada');
        this.getProjects();
      },
      err => console.log(err)
    );
  }

  onSetFormUUCP() {
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
    this.banderaUUCP = true;
  }

  onSetFormUCP() {
    this.tfc.t1 = this.formTFC.get('t1').value;
    this.tfc.t2 = this.formTFC.get('t2').value;
    this.tfc.t3 = this.formTFC.get('t3').value;
    this.tfc.t4 = this.formTFC.get('t4').value;
    this.tfc.t5 = this.formTFC.get('t5').value;
    this.tfc.t6 = this.formTFC.get('t6').value;
    this.tfc.t7 = this.formTFC.get('t7').value;
    this.tfc.t8 = this.formTFC.get('t8').value;
    this.tfc.t9 = this.formTFC.get('t9').value;
    this.tfc.t10 = this.formTFC.get('t10').value;
    this.tfc.t11 = this.formTFC.get('t11').value;
    this.tfc.t12 = this.formTFC.get('t12').value;
    this.tfc.t13 = this.formTFC.get('t13').value;
    // tslint:disable-next-line:max-line-length
    this.tfc.tFactor = (2 * this.tfc.t1) + (1 * this.tfc.t2) + (1 * this.tfc.t3) + (1 * this.tfc.t4) + (1 * this.tfc.t5) + (0.5 * this.tfc.t6) + (0.5 * this.tfc.t7) + (2 * this.tfc.t8) + (1 * this.tfc.t9) + (1 * this.tfc.t10) + (1 * this.tfc.t11) + (1 * this.tfc.t12) + (1 * this.tfc.t13);
    this.tfc.resultTFC = 0.6 + (0.01 * this.tfc.tFactor);
    this.formTFC.get('tFactor').setValue(this.tfc.tFactor);
    this.formTFC.get('resultTFC').setValue( this.tfc.resultTFC);
    this.ef.e1 = this.formEF.get('e1').value;
    this.ef.e2 = this.formEF.get('e2').value;
    this.ef.e3 = this.formEF.get('e3').value;
    this.ef.e4 = this.formEF.get('e4').value;
    this.ef.e5 = this.formEF.get('e5').value;
    this.ef.e6 = this.formEF.get('e6').value;
    this.ef.e7 = this.formEF.get('e7').value;
    this.ef.e8 = this.formEF.get('e8').value;
    // tslint:disable-next-line:max-line-length
    this.ef.eFactor = (1.5 * this.ef.e1) + (0.5 * this.ef.e2) + (1 * this.ef.e3) + (0.5 * this.ef.e4) + (1 * this.ef.e5) + (2 * this.ef.e6) + (-1 * this.ef.e7) + (-1 * this.ef.e8);
    this.ef.resultEF = 1.4 + (-0.03 * this.ef.eFactor);
    this.formEF.get('eFactor').setValue(this.ef.eFactor);
    this.formEF.get('resultEF').setValue( this.ef.resultEF);
    this.UCP = this.UUCP * this.tfc.resultTFC * this.ef.resultEF;
    this.banderaUCP = true;
  }

  onSetFormE() {
    this.e.f1 = this.formE.get('f1').value;
    this.e.f2 = this.formE.get('f2').value;
    this.e.total = this.e.f1 + this.e.f2;
    this.formE.get('total').setValue(this.e.total);
    if ((this.e.total >= 0 ) && (this.e.total <= 2)) {
      this.e.resultPF = 10;
      this.formE.get('resultPF').setValue(this.e.resultPF);
    } else if ((this.e.total === 3 ) || (this.e.total === 4)) {
      this.e.resultPF = 14;
      this.formE.get('resultPF').setValue(this.e.resultPF);
    } else {
      this.e.resultPF = 18;
      this.formE.get('resultPF').setValue(this.e.resultPF);
    }
    this.E = Math.round(this.e.resultPF * this.UCP);
    this.etcvds.analisis = Math.round((0.1 * this.E) / 0.4);
    this.etcvds.diseno = Math.round((0.2 * this.E) / 0.4);
    this.etcvds.desarrollo = this.E;
    this.etcvds.pruebas = Math.round((0.15 * this.E) / 0.4);
    this.etcvds.gestion = Math.round((0.15 * this.E) / 0.4);
    this.etcvds.eTotal = this.etcvds.analisis + this.etcvds.diseno + this.etcvds.desarrollo + this.etcvds.pruebas + this.etcvds.gestion;
    // tslint:disable-next-line:radix
    this.pcu.idProject = parseInt(this.formP.get('idProject').value);
    this.pcu.UUCP = this.UUCP;
    this.pcu.UCP = this.UCP;
    this.pcu.E = this.E;
    console.log(this.pcu);
    this.saveEstimate();
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

  get t1() {
    return this.formTFC.get('t1');
  }

  get t2() {
    return this.formTFC.get('t2');
  }

  get t3() {
    return this.formTFC.get('t3');
  }

  get t4() {
    return this.formTFC.get('t4');
  }

  get t5() {
    return this.formTFC.get('t5');
  }

  get t6() {
    return this.formTFC.get('t6');
  }

  get t7() {
    return this.formTFC.get('t7');
  }

  get t8() {
    return this.formTFC.get('t8');
  }

  get t9() {
    return this.formTFC.get('t9');
  }

  get t10() {
    return this.formTFC.get('t10');
  }

  get t11() {
    return this.formTFC.get('t11');
  }

  get t12() {
    return this.formTFC.get('t12');
  }

  get t13() {
    return this.formTFC.get('t13');
  }

  get tFactor() {
    return this.formTFC.get('tFactor');
  }

  get resultTFC() {
    return this.formTFC.get('resultTFC');
  }

  get e1() {
    return this.formEF.get('e1');
  }

  get e2() {
    return this.formEF.get('e2');
  }

  get e3() {
    return this.formEF.get('e3');
  }

  get e4() {
    return this.formEF.get('e4');
  }

  get e5() {
    return this.formEF.get('e5');
  }

  get e6() {
    return this.formEF.get('e6');
  }

  get e7() {
    return this.formEF.get('e7');
  }

  get e8() {
    return this.formEF.get('e8');
  }

  get eFactor() {
    return this.formEF.get('eFactor');
  }

  get resultEF() {
    return this.formEF.get('resultEF');
  }

  get f1() {
    return this.formE.get('f1');
  }

  get f2() {
    return this.formE.get('f2');
  }

  get total() {
    return this.formE.get('total');
  }

  get resultPF() {
    return this.formE.get('resultPF');
  }

  get idProject() {
    return this.formP.get('idProject');
  }

}
