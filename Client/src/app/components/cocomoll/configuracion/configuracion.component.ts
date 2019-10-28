import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CocomollService } from '../../../services/cocomoll.service';
import { Dps } from 'src/app/models/dps';
import { Dfs } from 'src/app/models/dfs';
import { Dfcdi } from 'src/app/models/dfcdi';
import { Dfcap } from 'src/app/models/dfcap';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  dps: Dps = {
    ps: {
      name: '',
      hours: '',
      salary: '',
      quantity: ''
    }
  };

  dfs: Dfs = {
    fs: {
      prec: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      flex: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      rels: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      team: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      pmat: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      }
    }
  };

  dfcdi: Dfcdi = {
    fcdi: {
      pers: {
        extraBajo: 0,
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      rcpx: {
        extraBajo: 0,
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      ruse: {
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      pdif: {
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      prex: {
        extraBajo: 0,
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      fcil: {
        extraBajo: 0,
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      sced: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      }
    }
  };

  dfcap: Dfcap = {
    fcap: {
      rely: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      data: {
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      cplx: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      ruse: {
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      docu: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      time: {
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      stor: {
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      pvol: {
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      acap: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      pcap: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      pcon: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      apex: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      plex: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      ltex: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      tool: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
      site: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0,
        extraAlto: 0
      },
      sced: {
        muyBajo: 0,
        bajo: 0,
        nominal: 0,
        alto: 0,
        muyAlto: 0
      },
    }
  };

  cdps: Dps = {
    ps: {
      name: 'Estandar',
      hours: 'Estandar',
      salary: 'Estandar',
      quantity: 'Estandar'
    }
  };

  cdfs: Dfs = {
    fs: {
      prec: {
        muyBajo: 6.2,
        bajo: 4.96,
        nominal: 3.72,
        alto: 2.48,
        muyAlto: 1.24,
        extraAlto: 0
      },
      flex: {
        muyBajo: 5.07,
        bajo: 4.05,
        nominal: 3.04,
        alto: 2.03,
        muyAlto: 1.01,
        extraAlto: 0
      },
      rels: {
        muyBajo: 7.07,
        bajo: 5.65,
        nominal: 4.24,
        alto: 2.83,
        muyAlto: 1.41,
        extraAlto: 0
      },
      team: {
        muyBajo: 5.48,
        bajo: 4.38,
        nominal: 3.29,
        alto: 2.19,
        muyAlto: 1.1,
        extraAlto: 0
      },
      pmat: {
        muyBajo: 7.8,
        bajo: 6.24,
        nominal: 4.68,
        alto: 3.12,
        muyAlto: 1.56,
        extraAlto: 0
      }
    }
  };

  configuracion: FormGroup;
  configuracion0: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      hours: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    });
  }

  createFormGroup0() {
    return new FormGroup({
      precmb: new FormControl('', Validators.required),
      precb: new FormControl('', Validators.required),
      precn: new FormControl('', Validators.required),
      preca: new FormControl('', Validators.required),
      precma: new FormControl('', Validators.required),
      precea: new FormControl('', Validators.required),
      flexmb: new FormControl('', Validators.required),
      flexb: new FormControl('', Validators.required),
      flexn: new FormControl('', Validators.required),
      flexa: new FormControl('', Validators.required),
      flexma: new FormControl('', Validators.required),
      flexea: new FormControl('', Validators.required),
      relsmb: new FormControl('', Validators.required),
      relsb: new FormControl('', Validators.required),
      relsn: new FormControl('', Validators.required),
      relsa: new FormControl('', Validators.required),
      relsma: new FormControl('', Validators.required),
      relsea: new FormControl('', Validators.required),
      teammb: new FormControl('', Validators.required),
      teamb: new FormControl('', Validators.required),
      teamn: new FormControl('', Validators.required),
      teama: new FormControl('', Validators.required),
      teamma: new FormControl('', Validators.required),
      teamea: new FormControl('', Validators.required),
      pmatmb: new FormControl('', Validators.required),
      pmatb: new FormControl('', Validators.required),
      pmatn: new FormControl('', Validators.required),
      pmata: new FormControl('', Validators.required),
      pmatma: new FormControl('', Validators.required),
      pmatea: new FormControl('', Validators.required)
    });
  }

  constructor(private cocomollService: CocomollService) {
    this.configuracion = this.createFormGroup();
    this.configuracion0 = this.createFormGroup0();
  }

  ngOnInit() {
    this.getPS('0');
    this.getFS('1');
    this.getFCDI('2');
    this.getFCAP('3');
  }

  onActualizar() {
    this.configuracion.get('name').setValue(this.dps.ps.name);
    this.configuracion.get('hours').setValue(this.dps.ps.hours);
    this.configuracion.get('salary').setValue(this.dps.ps.salary);
    this.configuracion.get('quantity').setValue(this.dps.ps.quantity);
  }

  onForm() {
    this.dps.ps.name = this.configuracion.get('name').value;
    this.dps.ps.hours = this.configuracion.get('hours').value;
    this.dps.ps.salary = this.configuracion.get('salary').value;
    this.dps.ps.quantity = this.configuracion.get('quantity').value;
  }

  onUpdateForm() {
    this.onForm();
    this.updatePS('0', true);
  }

  onFormR() {
    this.dps.ps.name = this.cdps.ps.name;
    this.dps.ps.hours = this.cdps.ps.hours;
    this.dps.ps.salary = this.cdps.ps.salary;
    this.dps.ps.quantity = this.cdps.ps.quantity;
  }

  onRestablecerForm() {
    this.onFormR();
    this.updatePS('0', false);
  }

  onActualizar0() {
    this.configuracion0.get('precmb').setValue(this.dfs.fs.prec.muyBajo);
    this.configuracion0.get('precb').setValue(this.dfs.fs.prec.bajo);
    this.configuracion0.get('precn').setValue(this.dfs.fs.prec.nominal);
    this.configuracion0.get('preca').setValue(this.dfs.fs.prec.alto);
    this.configuracion0.get('precma').setValue(this.dfs.fs.prec.muyAlto);
    this.configuracion0.get('precea').setValue(this.dfs.fs.flex.extraAlto);
    this.configuracion0.get('flexmb').setValue(this.dfs.fs.flex.muyBajo);
    this.configuracion0.get('flexb').setValue(this.dfs.fs.flex.bajo);
    this.configuracion0.get('flexn').setValue(this.dfs.fs.flex.nominal);
    this.configuracion0.get('flexa').setValue(this.dfs.fs.flex.alto);
    this.configuracion0.get('flexma').setValue(this.dfs.fs.flex.muyAlto);
    this.configuracion0.get('flexea').setValue(this.dfs.fs.flex.extraAlto);
    this.configuracion0.get('relsmb').setValue(this.dfs.fs.rels.muyBajo);
    this.configuracion0.get('relsb').setValue(this.dfs.fs.rels.bajo);
    this.configuracion0.get('relsn').setValue(this.dfs.fs.rels.nominal);
    this.configuracion0.get('relsa').setValue(this.dfs.fs.rels.alto);
    this.configuracion0.get('relsma').setValue(this.dfs.fs.rels.muyAlto);
    this.configuracion0.get('relsea').setValue(this.dfs.fs.rels.extraAlto);
    this.configuracion0.get('teammb').setValue(this.dfs.fs.team.muyBajo);
    this.configuracion0.get('teamb').setValue(this.dfs.fs.team.bajo);
    this.configuracion0.get('teamn').setValue(this.dfs.fs.team.nominal);
    this.configuracion0.get('teama').setValue(this.dfs.fs.team.alto);
    this.configuracion0.get('teamma').setValue(this.dfs.fs.team.muyAlto);
    this.configuracion0.get('teamea').setValue(this.dfs.fs.team.extraAlto);
    this.configuracion0.get('pmatmb').setValue(this.dfs.fs.pmat.muyBajo);
    this.configuracion0.get('pmatb').setValue(this.dfs.fs.pmat.bajo);
    this.configuracion0.get('pmatn').setValue(this.dfs.fs.pmat.nominal);
    this.configuracion0.get('pmata').setValue(this.dfs.fs.pmat.alto);
    this.configuracion0.get('pmatma').setValue(this.dfs.fs.pmat.muyAlto);
    this.configuracion0.get('pmatea').setValue(this.dfs.fs.pmat.extraAlto);
  }

  onForm0() {
    this.dfs.fs.prec.muyBajo =  this.configuracion0.get('precmb').value;
    this.dfs.fs.prec.bajo =  this.configuracion0.get('precb').value;
    this.dfs.fs.prec.nominal =  this.configuracion0.get('precn').value;
    this.dfs.fs.prec.alto =  this.configuracion0.get('preca').value;
    this.dfs.fs.prec.muyAlto =  this.configuracion0.get('precma').value;
    this.dfs.fs.prec.extraAlto =  this.configuracion0.get('precea').value;
    this.dfs.fs.flex.muyBajo =  this.configuracion0.get('flexmb').value;
    this.dfs.fs.flex.bajo =  this.configuracion0.get('flexb').value;
    this.dfs.fs.flex.nominal =  this.configuracion0.get('flexn').value;
    this.dfs.fs.flex.alto =  this.configuracion0.get('flexa').value;
    this.dfs.fs.flex.muyAlto =  this.configuracion0.get('flexma').value;
    this.dfs.fs.flex.extraAlto =  this.configuracion0.get('flexea').value;
    this.dfs.fs.rels.muyBajo =  this.configuracion0.get('relsmb').value;
    this.dfs.fs.rels.bajo =  this.configuracion0.get('relsb').value;
    this.dfs.fs.rels.nominal =  this.configuracion0.get('relsn').value;
    this.dfs.fs.rels.alto =  this.configuracion0.get('relsa').value;
    this.dfs.fs.rels.muyAlto =  this.configuracion0.get('relsma').value;
    this.dfs.fs.rels.extraAlto =  this.configuracion0.get('relsea').value;
    this.dfs.fs.team.muyBajo =  this.configuracion0.get('teammb').value;
    this.dfs.fs.team.bajo =  this.configuracion0.get('teamb').value;
    this.dfs.fs.team.nominal =  this.configuracion0.get('teamn').value;
    this.dfs.fs.team.alto =  this.configuracion0.get('teama').value;
    this.dfs.fs.team.muyAlto =  this.configuracion0.get('teamma').value;
    this.dfs.fs.team.extraAlto =  this.configuracion0.get('teamea').value;
    this.dfs.fs.pmat.muyBajo =  this.configuracion0.get('pmatmb').value;
    this.dfs.fs.pmat.bajo =  this.configuracion0.get('pmatb').value;
    this.dfs.fs.pmat.nominal =  this.configuracion0.get('pmatn').value;
    this.dfs.fs.pmat.alto =  this.configuracion0.get('pmata').value;
    this.dfs.fs.pmat.muyAlto =  this.configuracion0.get('pmatma').value;
    this.dfs.fs.pmat.extraAlto =  this.configuracion0.get('pmatea').value;
  }

  onUpdateForm0() {
    this.onForm0();
    this.updateFS('1', true);
  }

  onFormR0() {
    this.dfs.fs.prec.muyBajo =  this.cdfs.fs.prec.muyBajo;
    this.dfs.fs.prec.bajo =  this.cdfs.fs.prec.bajo;
    this.dfs.fs.prec.nominal =  this.cdfs.fs.prec.nominal;
    this.dfs.fs.prec.alto =  this.cdfs.fs.prec.alto;
    this.dfs.fs.prec.muyAlto =  this.cdfs.fs.prec.muyAlto;
    this.dfs.fs.prec.extraAlto =  this.cdfs.fs.prec.extraAlto;
    this.dfs.fs.flex.muyBajo =  this.cdfs.fs.flex.muyBajo;
    this.dfs.fs.flex.bajo =  this.cdfs.fs.flex.bajo;
    this.dfs.fs.flex.nominal =  this.cdfs.fs.flex.nominal;
    this.dfs.fs.flex.alto =  this.cdfs.fs.flex.alto;
    this.dfs.fs.flex.muyAlto =  this.cdfs.fs.flex.muyAlto;
    this.dfs.fs.flex.extraAlto =  this.cdfs.fs.flex.extraAlto;
    this.dfs.fs.rels.muyBajo =  this.cdfs.fs.rels.muyBajo;
    this.dfs.fs.rels.bajo =  this.cdfs.fs.rels.bajo;
    this.dfs.fs.rels.nominal =  this.cdfs.fs.rels.nominal;
    this.dfs.fs.rels.alto =  this.cdfs.fs.rels.alto;
    this.dfs.fs.rels.muyAlto =  this.cdfs.fs.rels.muyAlto;
    this.dfs.fs.rels.extraAlto =  this.cdfs.fs.rels.extraAlto;
    this.dfs.fs.team.muyBajo =  this.cdfs.fs.team.muyBajo;
    this.dfs.fs.team.bajo =  this.cdfs.fs.team.bajo;
    this.dfs.fs.team.nominal =  this.cdfs.fs.team.nominal;
    this.dfs.fs.team.alto =  this.cdfs.fs.team.alto;
    this.dfs.fs.team.muyAlto =  this.cdfs.fs.team.muyAlto;
    this.dfs.fs.team.extraAlto =  this.cdfs.fs.team.extraAlto;
    this.dfs.fs.pmat.muyBajo =  this.cdfs.fs.pmat.muyBajo;
    this.dfs.fs.pmat.bajo =  this.cdfs.fs.pmat.bajo;
    this.dfs.fs.pmat.nominal =  this.cdfs.fs.pmat.nominal;
    this.dfs.fs.pmat.alto =  this.cdfs.fs.pmat.alto;
    this.dfs.fs.pmat.muyAlto =  this.cdfs.fs.pmat.muyAlto;
    this.dfs.fs.pmat.extraAlto =  this.cdfs.fs.pmat.extraAlto;
  }

  onRestablecerForm0() {
    this.onFormR0();
    this.updateFS('1', false);
  }

  getPS(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.dps = res;
        console.log(this.dps);
        this.onActualizar();
      },
      err => console.log(err)
    );
  }

  getFS(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.dfs = res;
        console.log(this.dfs);
        this.onActualizar0();
      },
      err => console.log(err)
    );
  }

  getFCDI(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.dfcdi = res;
        console.log(this.dfcdi);
      },
      err => console.log(err)
    );
  }

  getFCAP(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.dfcap = res;
        console.log(this.dfcap);
      },
      err => console.log(err)
    );
  }

  updatePS(id: string, bandera: boolean) {
    this.cocomollService.updateJSON(id, this.dps).subscribe(
      res => {
        if (bandera) {
          alert('Configuracion Exitosa');
        }
        this.getPS('0');
      },
      err => console.log(err)
    );
  }

  updateFS(id: string, bandera: boolean) {
    this.cocomollService.updateJSON(id, this.dfs).subscribe(
      res => {
        if (bandera) {
          alert('Configuracion Exitosa');
        }
        this.getFS('1');
      },
      err => console.log(err)
    );
  }

  updateFCDI(id: string, bandera: boolean) {
    this.cocomollService.updateJSON(id, this.dfcdi).subscribe(
      res => {
        if (bandera) {
          alert('Configuracion Exitosa');
        }
        this.getFCDI('2');
      },
      err => console.log(err)
    );
  }

  updateFCAP(id: string, bandera: boolean) {
    this.cocomollService.updateJSON(id, this.dfcap).subscribe(
      res => {
        if (bandera) {
          alert('Configuracion Exitosa');
        }
        this.getFCAP('3');
      },
      err => console.log(err)
    );
  }

  get name() {
    return this.configuracion.get('name');
  }

  get hours() {
    return this.configuracion.get('hours');
  }

  get salary() {
    return this.configuracion.get('salary');
  }

  get quantity() {
    return this.configuracion.get('quantity');
  }

  get precmb() {
    return this.configuracion0.get('precmb');
  }

  get precb() {
    return this.configuracion0.get('precb');
  }

  get precn() {
    return this.configuracion0.get('precn');
  }

  get preca() {
    return this.configuracion0.get('preca');
  }

  get precma() {
    return this.configuracion0.get('precma');
  }

  get precea() {
    return this.configuracion0.get('precea');
  }

  get flexmb() {
    return this.configuracion0.get('flexmb');
  }

  get flexb() {
    return this.configuracion0.get('flexb');
  }

  get flexn() {
    return this.configuracion0.get('flexn');
  }

  get flexa() {
    return this.configuracion0.get('flexa');
  }

  get flexma() {
    return this.configuracion0.get('flexma');
  }

  get flexea() {
    return this.configuracion0.get('flexea');
  }

  get relsmb() {
    return this.configuracion0.get('relsmb');
  }

  get relsb() {
    return this.configuracion0.get('relsb');
  }

  get relsn() {
    return this.configuracion0.get('relsn');
  }

  get relsa() {
    return this.configuracion0.get('relsa');
  }

  get relsma() {
    return this.configuracion0.get('relsma');
  }

  get relsea() {
    return this.configuracion0.get('relsea');
  }

  get teammb() {
    return this.configuracion0.get('teammb');
  }

  get teamb() {
    return this.configuracion0.get('teamb');
  }

  get teamn() {
    return this.configuracion0.get('teamn');
  }

  get teama() {
    return this.configuracion0.get('teama');
  }

  get teamma() {
    return this.configuracion0.get('teamma');
  }

  get teamea() {
    return this.configuracion0.get('teamea');
  }

  get pmatmb() {
    return this.configuracion0.get('pmatmb');
  }

  get pmatb() {
    return this.configuracion0.get('pmatb');
  }

  get pmatn() {
    return this.configuracion0.get('pmatn');
  }

  get pmata() {
    return this.configuracion0.get('pmata');
  }

  get pmatma() {
    return this.configuracion0.get('pmatma');
  }

  get pmatea() {
    return this.configuracion0.get('pmatea');
  }

}
