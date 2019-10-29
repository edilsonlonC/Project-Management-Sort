import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CocomollService } from '../../../services/cocomoll.service';
import { Dps } from 'src/app/models/dps';
import { Dfs } from 'src/app/models/dfs';
import { Dfcdi } from 'src/app/models/dfcdi';
import { Dfcap } from 'src/app/models/dfcap';
import { CocomollComponent } from '../cocomoll.component';

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
      }
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

  cdfcdi: Dfcdi = {
    fcdi: {
      pers: {
        extraBajo: 2.12,
        muyBajo: 1.62,
        bajo: 1.26,
        nominal: 1,
        alto: 0.83,
        muyAlto: 0.63,
        extraAlto: 0.5
      },
      rcpx: {
        extraBajo: 0.49,
        muyBajo: 0.6,
        bajo: 0.83,
        nominal: 1,
        alto: 1.33,
        muyAlto: 1.91,
        extraAlto: 2.72
      },
      ruse: {
        bajo: 0.95,
        nominal: 1,
        alto: 1.07,
        muyAlto: 1.15,
        extraAlto: 1.24
      },
      pdif: {
        bajo: 0.87,
        nominal: 1,
        alto: 1.29,
        muyAlto: 1.81,
        extraAlto: 2.61
      },
      prex: {
        extraBajo: 1.59,
        muyBajo: 1.33,
        bajo: 1.12,
        nominal: 1,
        alto: 0.87,
        muyAlto: 0.74,
        extraAlto: 0.62
      },
      fcil: {
        extraBajo: 1.43,
        muyBajo: 1.3,
        bajo: 1.1,
        nominal: 1,
        alto: 0.87,
        muyAlto: 0.73,
        extraAlto: 0.62
      },
      sced: {
        muyBajo: 1.43,
        bajo: 1.14,
        nominal: 1,
        alto: 1,
        muyAlto: 1
      }
    }
  };

  cdfcap: Dfcap = {
    fcap: {
      rely: {
        muyBajo: 0.82,
        bajo: 0.92,
        nominal: 1,
        alto: 1.1,
        muyAlto: 1.26
      },
      data: {
        bajo: 0.9,
        nominal: 1,
        alto: 1.14,
        muyAlto: 1.28
      },
      cplx: {
        muyBajo: 0.73,
        bajo: 0.87,
        nominal: 1,
        alto: 1.17,
        muyAlto: 1.34,
        extraAlto: 1.74
      },
      ruse: {
        bajo: 0.95,
        nominal: 1,
        alto: 1.07,
        muyAlto: 1.15,
        extraAlto: 1.24
      },
      docu: {
        muyBajo: 0.81,
        bajo: 0.91,
        nominal: 1,
        alto: 1.11,
        muyAlto: 1.23
      },
      time: {
        nominal: 1,
        alto: 1.11,
        muyAlto: 1.29,
        extraAlto: 1.63
      },
      stor: {
        nominal: 1,
        alto: 1.05,
        muyAlto: 1.17,
        extraAlto: 1.46
      },
      pvol: {
        bajo: 0.87,
        nominal: 1,
        alto: 1.15,
        muyAlto: 1.3
      },
      acap: {
        muyBajo: 1.42,
        bajo: 1.19,
        nominal: 1,
        alto: 0.85,
        muyAlto: 0.71
      },
      pcap: {
        muyBajo: 1.34,
        bajo: 1.15,
        nominal: 1,
        alto: 0.88,
        muyAlto: 0.76
      },
      pcon: {
        muyBajo: 1.29,
        bajo: 1.12,
        nominal: 1,
        alto: 0.9,
        muyAlto: 0.81
      },
      apex: {
        muyBajo: 1.22,
        bajo: 1.1,
        nominal: 1,
        alto: 0.88,
        muyAlto: 0.81
      },
      plex: {
        muyBajo: 1.19,
        bajo: 1.09,
        nominal: 1,
        alto: 0.91,
        muyAlto: 0.85
      },
      ltex: {
        muyBajo: 1.2,
        bajo: 1.09,
        nominal: 1,
        alto: 0.91,
        muyAlto: 0.84
      },
      tool: {
        muyBajo: 1.17,
        bajo: 1.09,
        nominal: 1,
        alto: 0.9,
        muyAlto: 0.78
      },
      site: {
        muyBajo: 1.22,
        bajo: 1.09,
        nominal: 1,
        alto: 0.93,
        muyAlto: 0.86,
        extraAlto: 0.8
      },
      sced: {
        muyBajo: 1.43,
        bajo: 1.14,
        nominal: 1,
        alto: 1,
        muyAlto: 1
      }
    }
  };

  configuracion: FormGroup;
  configuracion0: FormGroup;
  configuracion1: FormGroup;
  configuracion2: FormGroup;

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

  createFormGroup1() {
    return new FormGroup({
      perseb: new FormControl('', Validators.required),
      persmb: new FormControl('', Validators.required),
      persb: new FormControl('', Validators.required),
      persn: new FormControl('', Validators.required),
      persa: new FormControl('', Validators.required),
      persma: new FormControl('', Validators.required),
      persea: new FormControl('', Validators.required),
      rcpxeb: new FormControl('', Validators.required),
      rcpxmb: new FormControl('', Validators.required),
      rcpxb: new FormControl('', Validators.required),
      rcpxn: new FormControl('', Validators.required),
      rcpxa: new FormControl('', Validators.required),
      rcpxma: new FormControl('', Validators.required),
      rcpxea: new FormControl('', Validators.required),
      ruseb: new FormControl('', Validators.required),
      rusen: new FormControl('', Validators.required),
      rusea: new FormControl('', Validators.required),
      rusema: new FormControl('', Validators.required),
      ruseea: new FormControl('', Validators.required),
      pdifb: new FormControl('', Validators.required),
      pdifn: new FormControl('', Validators.required),
      pdifa: new FormControl('', Validators.required),
      pdifma: new FormControl('', Validators.required),
      pdifea: new FormControl('', Validators.required),
      prexeb: new FormControl('', Validators.required),
      prexmb: new FormControl('', Validators.required),
      prexb: new FormControl('', Validators.required),
      prexn: new FormControl('', Validators.required),
      prexa: new FormControl('', Validators.required),
      prexma: new FormControl('', Validators.required),
      prexea: new FormControl('', Validators.required),
      fcileb: new FormControl('', Validators.required),
      fcilmb: new FormControl('', Validators.required),
      fcilb: new FormControl('', Validators.required),
      fciln: new FormControl('', Validators.required),
      fcila: new FormControl('', Validators.required),
      fcilma: new FormControl('', Validators.required),
      fcilea: new FormControl('', Validators.required),
      scedmb: new FormControl('', Validators.required),
      scedb: new FormControl('', Validators.required),
      scedn: new FormControl('', Validators.required),
      sceda: new FormControl('', Validators.required),
      scedma: new FormControl('', Validators.required)
    });
  }

  createFormGroup2() {
    return new FormGroup({
      relymb: new FormControl('', Validators.required),
      relyb: new FormControl('', Validators.required),
      relyn: new FormControl('', Validators.required),
      relya: new FormControl('', Validators.required),
      relyma: new FormControl('', Validators.required),
      datab: new FormControl('', Validators.required),
      datan: new FormControl('', Validators.required),
      dataa: new FormControl('', Validators.required),
      datama: new FormControl('', Validators.required),
      cplxmb: new FormControl('', Validators.required),
      cplxb: new FormControl('', Validators.required),
      cplxn: new FormControl('', Validators.required),
      cplxa: new FormControl('', Validators.required),
      cplxma: new FormControl('', Validators.required),
      cplxea: new FormControl('', Validators.required),
      ruseab: new FormControl('', Validators.required),
      rusean: new FormControl('', Validators.required),
      ruseaa: new FormControl('', Validators.required),
      ruseama: new FormControl('', Validators.required),
      ruseaea: new FormControl('', Validators.required),
      documb: new FormControl('', Validators.required),
      docub: new FormControl('', Validators.required),
      docun: new FormControl('', Validators.required),
      docua: new FormControl('', Validators.required),
      documa: new FormControl('', Validators.required),
      timen: new FormControl('', Validators.required),
      timea: new FormControl('', Validators.required),
      timema: new FormControl('', Validators.required),
      timeea: new FormControl('', Validators.required),
      storn: new FormControl('', Validators.required),
      stora: new FormControl('', Validators.required),
      storma: new FormControl('', Validators.required),
      storea: new FormControl('', Validators.required),
      pvolb: new FormControl('', Validators.required),
      pvoln: new FormControl('', Validators.required),
      pvola: new FormControl('', Validators.required),
      pvolma: new FormControl('', Validators.required),
      acapmb: new FormControl('', Validators.required),
      acapb: new FormControl('', Validators.required),
      acapn: new FormControl('', Validators.required),
      acapa: new FormControl('', Validators.required),
      acapma: new FormControl('', Validators.required),
      pcapmb: new FormControl('', Validators.required),
      pcapb: new FormControl('', Validators.required),
      pcapn: new FormControl('', Validators.required),
      pcapa: new FormControl('', Validators.required),
      pcapma: new FormControl('', Validators.required),
      pconmb: new FormControl('', Validators.required),
      pconb: new FormControl('', Validators.required),
      pconn: new FormControl('', Validators.required),
      pcona: new FormControl('', Validators.required),
      pconma: new FormControl('', Validators.required),
      apexmb: new FormControl('', Validators.required),
      apexb: new FormControl('', Validators.required),
      apexn: new FormControl('', Validators.required),
      apexa: new FormControl('', Validators.required),
      apexma: new FormControl('', Validators.required),
      plexmb: new FormControl('', Validators.required),
      plexb: new FormControl('', Validators.required),
      plexn: new FormControl('', Validators.required),
      plexa: new FormControl('', Validators.required),
      plexma: new FormControl('', Validators.required),
      ltexmb: new FormControl('', Validators.required),
      ltexb: new FormControl('', Validators.required),
      ltexn: new FormControl('', Validators.required),
      ltexa: new FormControl('', Validators.required),
      ltexma: new FormControl('', Validators.required),
      toolmb: new FormControl('', Validators.required),
      toolb: new FormControl('', Validators.required),
      tooln: new FormControl('', Validators.required),
      toola: new FormControl('', Validators.required),
      toolma: new FormControl('', Validators.required),
      sitemb: new FormControl('', Validators.required),
      siteb: new FormControl('', Validators.required),
      siten: new FormControl('', Validators.required),
      sitea: new FormControl('', Validators.required),
      sitema: new FormControl('', Validators.required),
      siteea: new FormControl('', Validators.required),
      scedamb: new FormControl('', Validators.required),
      scedab: new FormControl('', Validators.required),
      scedan: new FormControl('', Validators.required),
      scedaa: new FormControl('', Validators.required),
      scedama: new FormControl('', Validators.required)
    });
  }

  constructor(private cocomollService: CocomollService, private cocomollComponent: CocomollComponent) {
    this.configuracion = this.createFormGroup();
    this.configuracion0 = this.createFormGroup0();
    this.configuracion1 = this.createFormGroup1();
    this.configuracion2 = this.createFormGroup2();
  }

  ngOnInit() {
    this.getFCAP('3');
    this.getPS('0');
    this.getFS('1');
    this.getFCDI('2');
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

  onActualizar1() {
    this.configuracion1.get('perseb').setValue(this.dfcdi.fcdi.pers.extraBajo);
    this.configuracion1.get('persmb').setValue(this.dfcdi.fcdi.pers.muyBajo);
    this.configuracion1.get('persb').setValue(this.dfcdi.fcdi.pers.bajo);
    this.configuracion1.get('persn').setValue(this.dfcdi.fcdi.pers.nominal);
    this.configuracion1.get('persa').setValue(this.dfcdi.fcdi.pers.alto);
    this.configuracion1.get('persma').setValue(this.dfcdi.fcdi.pers.muyAlto);
    this.configuracion1.get('persea').setValue(this.dfcdi.fcdi.pers.extraAlto);
    this.configuracion1.get('rcpxeb').setValue(this.dfcdi.fcdi.rcpx.extraBajo);
    this.configuracion1.get('rcpxmb').setValue(this.dfcdi.fcdi.rcpx.muyBajo);
    this.configuracion1.get('rcpxb').setValue(this.dfcdi.fcdi.rcpx.bajo);
    this.configuracion1.get('rcpxn').setValue(this.dfcdi.fcdi.rcpx.nominal);
    this.configuracion1.get('rcpxa').setValue(this.dfcdi.fcdi.rcpx.alto);
    this.configuracion1.get('rcpxma').setValue(this.dfcdi.fcdi.rcpx.muyAlto);
    this.configuracion1.get('rcpxea').setValue(this.dfcdi.fcdi.rcpx.extraAlto);
    this.configuracion1.get('ruseb').setValue(this.dfcdi.fcdi.ruse.bajo);
    this.configuracion1.get('rusen').setValue(this.dfcdi.fcdi.ruse.nominal);
    this.configuracion1.get('rusea').setValue(this.dfcdi.fcdi.ruse.alto);
    this.configuracion1.get('rusema').setValue(this.dfcdi.fcdi.ruse.muyAlto);
    this.configuracion1.get('ruseea').setValue(this.dfcdi.fcdi.ruse.extraAlto);
    this.configuracion1.get('pdifb').setValue(this.dfcdi.fcdi.pdif.bajo);
    this.configuracion1.get('pdifn').setValue(this.dfcdi.fcdi.pdif.nominal);
    this.configuracion1.get('pdifa').setValue(this.dfcdi.fcdi.pdif.alto);
    this.configuracion1.get('pdifma').setValue(this.dfcdi.fcdi.pdif.muyAlto);
    this.configuracion1.get('pdifea').setValue(this.dfcdi.fcdi.pdif.extraAlto);
    this.configuracion1.get('prexeb').setValue(this.dfcdi.fcdi.prex.extraBajo);
    this.configuracion1.get('prexmb').setValue(this.dfcdi.fcdi.prex.muyBajo);
    this.configuracion1.get('prexb').setValue(this.dfcdi.fcdi.prex.bajo);
    this.configuracion1.get('prexn').setValue(this.dfcdi.fcdi.prex.nominal);
    this.configuracion1.get('prexa').setValue(this.dfcdi.fcdi.prex.alto);
    this.configuracion1.get('prexma').setValue(this.dfcdi.fcdi.prex.muyAlto);
    this.configuracion1.get('prexea').setValue(this.dfcdi.fcdi.prex.extraAlto);
    this.configuracion1.get('fcileb').setValue(this.dfcdi.fcdi.fcil.extraBajo);
    this.configuracion1.get('fcilmb').setValue(this.dfcdi.fcdi.fcil.muyBajo);
    this.configuracion1.get('fcilb').setValue(this.dfcdi.fcdi.fcil.bajo);
    this.configuracion1.get('fciln').setValue(this.dfcdi.fcdi.fcil.nominal);
    this.configuracion1.get('fcila').setValue(this.dfcdi.fcdi.fcil.alto);
    this.configuracion1.get('fcilma').setValue(this.dfcdi.fcdi.fcil.muyAlto);
    this.configuracion1.get('fcilea').setValue(this.dfcdi.fcdi.fcil.extraAlto);
    this.configuracion1.get('scedmb').setValue(this.dfcdi.fcdi.sced.muyBajo);
    this.configuracion1.get('scedb').setValue(this.dfcdi.fcdi.sced.bajo);
    this.configuracion1.get('scedn').setValue(this.dfcdi.fcdi.sced.nominal);
    this.configuracion1.get('sceda').setValue(this.dfcdi.fcdi.sced.alto);
    this.configuracion1.get('scedma').setValue(this.dfcdi.fcdi.sced.muyAlto);
  }

  onForm1() {
    this.dfcdi.fcdi.pers.extraBajo =  this.configuracion1.get('perseb').value;
    this.dfcdi.fcdi.pers.muyBajo =  this.configuracion1.get('persmb').value;
    this.dfcdi.fcdi.pers.bajo =  this.configuracion1.get('persb').value;
    this.dfcdi.fcdi.pers.nominal =  this.configuracion1.get('persn').value;
    this.dfcdi.fcdi.pers.alto =  this.configuracion1.get('persa').value;
    this.dfcdi.fcdi.pers.muyAlto =  this.configuracion1.get('persma').value;
    this.dfcdi.fcdi.pers.extraAlto =  this.configuracion1.get('persea').value;
    this.dfcdi.fcdi.rcpx.extraBajo =  this.configuracion1.get('rcpxeb').value;
    this.dfcdi.fcdi.rcpx.muyBajo =  this.configuracion1.get('rcpxmb').value;
    this.dfcdi.fcdi.rcpx.bajo =  this.configuracion1.get('rcpxb').value;
    this.dfcdi.fcdi.rcpx.nominal =  this.configuracion1.get('rcpxn').value;
    this.dfcdi.fcdi.rcpx.alto =  this.configuracion1.get('rcpxa').value;
    this.dfcdi.fcdi.rcpx.muyAlto =  this.configuracion1.get('rcpxma').value;
    this.dfcdi.fcdi.rcpx.extraAlto =  this.configuracion1.get('rcpxea').value;
    this.dfcdi.fcdi.ruse.bajo =  this.configuracion1.get('ruseb').value;
    this.dfcdi.fcdi.ruse.nominal =  this.configuracion1.get('rusen').value;
    this.dfcdi.fcdi.ruse.alto =  this.configuracion1.get('rusea').value;
    this.dfcdi.fcdi.ruse.muyAlto =  this.configuracion1.get('rusema').value;
    this.dfcdi.fcdi.ruse.extraAlto =  this.configuracion1.get('ruseea').value;
    this.dfcdi.fcdi.pdif.bajo =  this.configuracion1.get('pdifb').value;
    this.dfcdi.fcdi.pdif.nominal =  this.configuracion1.get('pdifn').value;
    this.dfcdi.fcdi.pdif.alto =  this.configuracion1.get('pdifa').value;
    this.dfcdi.fcdi.pdif.muyAlto =  this.configuracion1.get('pdifma').value;
    this.dfcdi.fcdi.pdif.extraAlto =  this.configuracion1.get('pdifea').value;
    this.dfcdi.fcdi.prex.extraBajo =  this.configuracion1.get('prexeb').value;
    this.dfcdi.fcdi.prex.muyBajo =  this.configuracion1.get('prexmb').value;
    this.dfcdi.fcdi.prex.bajo =  this.configuracion1.get('prexb').value;
    this.dfcdi.fcdi.prex.nominal =  this.configuracion1.get('prexn').value;
    this.dfcdi.fcdi.prex.alto =  this.configuracion1.get('prexa').value;
    this.dfcdi.fcdi.prex.muyAlto =  this.configuracion1.get('prexma').value;
    this.dfcdi.fcdi.prex.extraAlto =  this.configuracion1.get('prexea').value;
    this.dfcdi.fcdi.fcil.extraBajo =  this.configuracion1.get('fcileb').value;
    this.dfcdi.fcdi.fcil.muyBajo =  this.configuracion1.get('fcilmb').value;
    this.dfcdi.fcdi.fcil.bajo =  this.configuracion1.get('fcilb').value;
    this.dfcdi.fcdi.fcil.nominal =  this.configuracion1.get('fciln').value;
    this.dfcdi.fcdi.fcil.alto =  this.configuracion1.get('fcila').value;
    this.dfcdi.fcdi.fcil.muyAlto =  this.configuracion1.get('fcilma').value;
    this.dfcdi.fcdi.fcil.extraAlto =  this.configuracion1.get('fcilea').value;
    this.dfcdi.fcdi.sced.muyBajo =  this.configuracion1.get('scedmb').value;
    this.dfcdi.fcdi.sced.bajo =  this.configuracion1.get('scedb').value;
    this.dfcdi.fcdi.sced.nominal =  this.configuracion1.get('scedn').value;
    this.dfcdi.fcdi.sced.alto =  this.configuracion1.get('sceda').value;
    this.dfcdi.fcdi.sced.muyAlto =  this.configuracion1.get('scedma').value;
  }

  onUpdateForm1() {
    this.onForm1();
    this.updateFCDI('2', true);
  }

  onFormR1() {
    this.dfcdi.fcdi.pers.extraBajo =  this.cdfcdi.fcdi.pers.extraBajo;
    this.dfcdi.fcdi.pers.muyBajo =  this.cdfcdi.fcdi.pers.muyBajo;
    this.dfcdi.fcdi.pers.bajo =  this.cdfcdi.fcdi.pers.bajo;
    this.dfcdi.fcdi.pers.nominal =  this.cdfcdi.fcdi.pers.nominal;
    this.dfcdi.fcdi.pers.alto =  this.cdfcdi.fcdi.pers.alto;
    this.dfcdi.fcdi.pers.muyAlto =  this.cdfcdi.fcdi.pers.muyAlto;
    this.dfcdi.fcdi.pers.extraAlto =  this.cdfcdi.fcdi.pers.extraAlto;
    this.dfcdi.fcdi.rcpx.extraBajo =  this.cdfcdi.fcdi.rcpx.extraBajo;
    this.dfcdi.fcdi.rcpx.muyBajo =  this.cdfcdi.fcdi.rcpx.muyBajo;
    this.dfcdi.fcdi.rcpx.bajo =  this.cdfcdi.fcdi.rcpx.bajo;
    this.dfcdi.fcdi.rcpx.nominal =  this.cdfcdi.fcdi.rcpx.nominal;
    this.dfcdi.fcdi.rcpx.alto =  this.cdfcdi.fcdi.rcpx.alto;
    this.dfcdi.fcdi.rcpx.muyAlto =  this.cdfcdi.fcdi.rcpx.muyAlto;
    this.dfcdi.fcdi.rcpx.extraAlto =  this.cdfcdi.fcdi.rcpx.extraAlto;
    this.dfcdi.fcdi.ruse.bajo =  this.cdfcdi.fcdi.ruse.bajo;
    this.dfcdi.fcdi.ruse.nominal =  this.cdfcdi.fcdi.ruse.nominal;
    this.dfcdi.fcdi.ruse.alto =  this.cdfcdi.fcdi.ruse.alto;
    this.dfcdi.fcdi.ruse.muyAlto =  this.cdfcdi.fcdi.ruse.muyAlto;
    this.dfcdi.fcdi.ruse.extraAlto =  this.cdfcdi.fcdi.ruse.extraAlto;
    this.dfcdi.fcdi.pdif.bajo =  this.cdfcdi.fcdi.pdif.bajo;
    this.dfcdi.fcdi.pdif.nominal =  this.cdfcdi.fcdi.pdif.nominal;
    this.dfcdi.fcdi.pdif.alto =  this.cdfcdi.fcdi.pdif.alto;
    this.dfcdi.fcdi.pdif.muyAlto =  this.cdfcdi.fcdi.pdif.muyAlto;
    this.dfcdi.fcdi.pdif.extraAlto =  this.cdfcdi.fcdi.pdif.extraAlto;
    this.dfcdi.fcdi.prex.extraBajo =  this.cdfcdi.fcdi.prex.extraBajo;
    this.dfcdi.fcdi.prex.muyBajo =  this.cdfcdi.fcdi.prex.muyBajo;
    this.dfcdi.fcdi.prex.bajo =  this.cdfcdi.fcdi.prex.bajo;
    this.dfcdi.fcdi.prex.nominal =  this.cdfcdi.fcdi.prex.nominal;
    this.dfcdi.fcdi.prex.alto =  this.cdfcdi.fcdi.prex.alto;
    this.dfcdi.fcdi.prex.muyAlto =  this.cdfcdi.fcdi.prex.muyAlto;
    this.dfcdi.fcdi.prex.extraAlto =  this.cdfcdi.fcdi.prex.extraAlto;
    this.dfcdi.fcdi.fcil.extraBajo =  this.cdfcdi.fcdi.fcil.extraBajo;
    this.dfcdi.fcdi.fcil.muyBajo =  this.cdfcdi.fcdi.fcil.muyBajo;
    this.dfcdi.fcdi.fcil.bajo =  this.cdfcdi.fcdi.fcil.bajo;
    this.dfcdi.fcdi.fcil.nominal =  this.cdfcdi.fcdi.fcil.nominal;
    this.dfcdi.fcdi.fcil.alto =  this.cdfcdi.fcdi.fcil.alto;
    this.dfcdi.fcdi.fcil.muyAlto =  this.cdfcdi.fcdi.fcil.muyAlto;
    this.dfcdi.fcdi.fcil.extraAlto =  this.cdfcdi.fcdi.fcil.extraAlto;
    this.dfcdi.fcdi.sced.muyBajo =  this.cdfcdi.fcdi.sced.muyBajo;
    this.dfcdi.fcdi.sced.bajo =  this.cdfcdi.fcdi.sced.bajo;
    this.dfcdi.fcdi.sced.nominal =  this.cdfcdi.fcdi.sced.nominal;
    this.dfcdi.fcdi.sced.alto =  this.cdfcdi.fcdi.sced.alto;
    this.dfcdi.fcdi.sced.muyAlto =  this.cdfcdi.fcdi.sced.muyAlto;
  }

  onRestablecerForm1() {
    this.onFormR1();
    this.updateFCDI('2', false);
  }

  onActualizar2() {
    this.configuracion2.get('relymb').setValue(this.dfcap.fcap.rely.muyBajo);
    this.configuracion2.get('relyb').setValue(this.dfcap.fcap.rely.bajo);
    this.configuracion2.get('relyn').setValue(this.dfcap.fcap.rely.nominal);
    this.configuracion2.get('relya').setValue(this.dfcap.fcap.rely.alto);
    this.configuracion2.get('relyma').setValue(this.dfcap.fcap.rely.muyAlto);
    this.configuracion2.get('datab').setValue(this.dfcap.fcap.data.bajo);
    this.configuracion2.get('datan').setValue(this.dfcap.fcap.data.nominal);
    this.configuracion2.get('dataa').setValue(this.dfcap.fcap.data.alto);
    this.configuracion2.get('datama').setValue(this.dfcap.fcap.data.muyAlto);
    this.configuracion2.get('cplxmb').setValue(this.dfcap.fcap.cplx.muyBajo);
    this.configuracion2.get('cplxb').setValue(this.dfcap.fcap.cplx.bajo);
    this.configuracion2.get('cplxn').setValue(this.dfcap.fcap.cplx.nominal);
    this.configuracion2.get('cplxa').setValue(this.dfcap.fcap.cplx.alto);
    this.configuracion2.get('cplxma').setValue(this.dfcap.fcap.cplx.muyAlto);
    this.configuracion2.get('cplxea').setValue(this.dfcap.fcap.cplx.extraAlto);
    this.configuracion2.get('ruseab').setValue(this.dfcap.fcap.ruse.bajo);
    this.configuracion2.get('rusean').setValue(this.dfcap.fcap.ruse.nominal);
    this.configuracion2.get('ruseaa').setValue(this.dfcap.fcap.ruse.alto);
    this.configuracion2.get('ruseama').setValue(this.dfcap.fcap.ruse.muyAlto);
    this.configuracion2.get('ruseaea').setValue(this.dfcap.fcap.ruse.extraAlto);
    this.configuracion2.get('documb').setValue(this.dfcap.fcap.docu.muyBajo);
    this.configuracion2.get('docub').setValue(this.dfcap.fcap.docu.bajo);
    this.configuracion2.get('docun').setValue(this.dfcap.fcap.docu.nominal);
    this.configuracion2.get('docua').setValue(this.dfcap.fcap.docu.alto);
    this.configuracion2.get('documa').setValue(this.dfcap.fcap.docu.muyAlto);
    this.configuracion2.get('timen').setValue(this.dfcap.fcap.time.nominal);
    this.configuracion2.get('timea').setValue(this.dfcap.fcap.time.alto);
    this.configuracion2.get('timema').setValue(this.dfcap.fcap.time.muyAlto);
    this.configuracion2.get('timeea').setValue(this.dfcap.fcap.time.extraAlto);
    this.configuracion2.get('storn').setValue(this.dfcap.fcap.stor.nominal);
    this.configuracion2.get('stora').setValue(this.dfcap.fcap.stor.alto);
    this.configuracion2.get('storma').setValue(this.dfcap.fcap.stor.muyAlto);
    this.configuracion2.get('storea').setValue(this.dfcap.fcap.stor.extraAlto);
    this.configuracion2.get('pvolb').setValue(this.dfcap.fcap.pvol.bajo);
    this.configuracion2.get('pvoln').setValue(this.dfcap.fcap.pvol.nominal);
    this.configuracion2.get('pvola').setValue(this.dfcap.fcap.pvol.alto);
    this.configuracion2.get('pvolma').setValue(this.dfcap.fcap.pvol.muyAlto);
    this.configuracion2.get('acapmb').setValue(this.dfcap.fcap.acap.muyBajo);
    this.configuracion2.get('acapb').setValue(this.dfcap.fcap.acap.bajo);
    this.configuracion2.get('acapn').setValue(this.dfcap.fcap.acap.nominal);
    this.configuracion2.get('acapa').setValue(this.dfcap.fcap.acap.alto);
    this.configuracion2.get('acapma').setValue(this.dfcap.fcap.acap.muyAlto);
    this.configuracion2.get('pcapmb').setValue(this.dfcap.fcap.pcap.muyBajo);
    this.configuracion2.get('pcapb').setValue(this.dfcap.fcap.pcap.bajo);
    this.configuracion2.get('pcapn').setValue(this.dfcap.fcap.pcap.nominal);
    this.configuracion2.get('pcapa').setValue(this.dfcap.fcap.pcap.alto);
    this.configuracion2.get('pcapma').setValue(this.dfcap.fcap.pcap.muyAlto);
    this.configuracion2.get('pconmb').setValue(this.dfcap.fcap.pcon.muyBajo);
    this.configuracion2.get('pconb').setValue(this.dfcap.fcap.pcon.bajo);
    this.configuracion2.get('pconn').setValue(this.dfcap.fcap.pcon.nominal);
    this.configuracion2.get('pcona').setValue(this.dfcap.fcap.pcon.alto);
    this.configuracion2.get('pconma').setValue(this.dfcap.fcap.pcon.muyAlto);
    this.configuracion2.get('apexmb').setValue(this.dfcap.fcap.apex.muyBajo);
    this.configuracion2.get('apexb').setValue(this.dfcap.fcap.apex.bajo);
    this.configuracion2.get('apexn').setValue(this.dfcap.fcap.apex.nominal);
    this.configuracion2.get('apexa').setValue(this.dfcap.fcap.apex.alto);
    this.configuracion2.get('apexma').setValue(this.dfcap.fcap.apex.muyAlto);
    this.configuracion2.get('plexmb').setValue(this.dfcap.fcap.plex.muyBajo);
    this.configuracion2.get('plexb').setValue(this.dfcap.fcap.plex.bajo);
    this.configuracion2.get('plexn').setValue(this.dfcap.fcap.plex.nominal);
    this.configuracion2.get('plexa').setValue(this.dfcap.fcap.plex.alto);
    this.configuracion2.get('plexma').setValue(this.dfcap.fcap.plex.muyAlto);
    this.configuracion2.get('ltexmb').setValue(this.dfcap.fcap.ltex.muyBajo);
    this.configuracion2.get('ltexb').setValue(this.dfcap.fcap.ltex.bajo);
    this.configuracion2.get('ltexn').setValue(this.dfcap.fcap.ltex.nominal);
    this.configuracion2.get('ltexa').setValue(this.dfcap.fcap.ltex.alto);
    this.configuracion2.get('ltexma').setValue(this.dfcap.fcap.ltex.muyAlto);
    this.configuracion2.get('toolmb').setValue(this.dfcap.fcap.tool.muyBajo);
    this.configuracion2.get('toolb').setValue(this.dfcap.fcap.tool.bajo);
    this.configuracion2.get('tooln').setValue(this.dfcap.fcap.tool.nominal);
    this.configuracion2.get('toola').setValue(this.dfcap.fcap.tool.alto);
    this.configuracion2.get('toolma').setValue(this.dfcap.fcap.tool.muyAlto);
    this.configuracion2.get('sitemb').setValue(this.dfcap.fcap.site.muyBajo);
    this.configuracion2.get('siteb').setValue(this.dfcap.fcap.site.bajo);
    this.configuracion2.get('siten').setValue(this.dfcap.fcap.site.nominal);
    this.configuracion2.get('sitea').setValue(this.dfcap.fcap.site.alto);
    this.configuracion2.get('sitema').setValue(this.dfcap.fcap.site.muyAlto);
    this.configuracion2.get('siteea').setValue(this.dfcap.fcap.site.extraAlto);
    this.configuracion2.get('scedamb').setValue(this.dfcap.fcap.sced.muyBajo);
    this.configuracion2.get('scedab').setValue(this.dfcap.fcap.sced.bajo);
    this.configuracion2.get('scedan').setValue(this.dfcap.fcap.sced.nominal);
    this.configuracion2.get('scedaa').setValue(this.dfcap.fcap.sced.alto);
    this.configuracion2.get('scedama').setValue(this.dfcap.fcap.sced.muyAlto);
  }

  onForm2() {
    this.dfcap.fcap.rely.muyBajo =  this.configuracion2.get('relymb').value;
    this.dfcap.fcap.rely.bajo =  this.configuracion2.get('relyb').value;
    this.dfcap.fcap.rely.nominal =  this.configuracion2.get('relyn').value;
    this.dfcap.fcap.rely.alto =  this.configuracion2.get('relya').value;
    this.dfcap.fcap.rely.muyAlto =  this.configuracion2.get('relyma').value;
    this.dfcap.fcap.data.bajo =  this.configuracion2.get('datab').value;
    this.dfcap.fcap.data.nominal =  this.configuracion2.get('datan').value;
    this.dfcap.fcap.data.alto =  this.configuracion2.get('dataa').value;
    this.dfcap.fcap.data.muyAlto =  this.configuracion2.get('datama').value;
    this.dfcap.fcap.cplx.muyBajo =  this.configuracion2.get('cplxmb').value;
    this.dfcap.fcap.cplx.bajo =  this.configuracion2.get('cplxb').value;
    this.dfcap.fcap.cplx.nominal =  this.configuracion2.get('cplxn').value;
    this.dfcap.fcap.cplx.alto =  this.configuracion2.get('cplxa').value;
    this.dfcap.fcap.cplx.muyAlto =  this.configuracion2.get('cplxma').value;
    this.dfcap.fcap.cplx.extraAlto =  this.configuracion2.get('cplxea').value;
    this.dfcap.fcap.ruse.bajo =  this.configuracion2.get('ruseab').value;
    this.dfcap.fcap.ruse.nominal =  this.configuracion2.get('rusean').value;
    this.dfcap.fcap.ruse.alto =  this.configuracion2.get('ruseaa').value;
    this.dfcap.fcap.ruse.muyAlto =  this.configuracion2.get('ruseama').value;
    this.dfcap.fcap.ruse.extraAlto =  this.configuracion2.get('ruseaea').value;
    this.dfcap.fcap.docu.muyBajo =  this.configuracion2.get('documb').value;
    this.dfcap.fcap.docu.bajo =  this.configuracion2.get('docub').value;
    this.dfcap.fcap.docu.nominal =  this.configuracion2.get('docun').value;
    this.dfcap.fcap.docu.alto =  this.configuracion2.get('docua').value;
    this.dfcap.fcap.docu.muyAlto =  this.configuracion2.get('documa').value;
    this.dfcap.fcap.time.nominal =  this.configuracion2.get('timen').value;
    this.dfcap.fcap.time.alto =  this.configuracion2.get('timea').value;
    this.dfcap.fcap.time.muyAlto =  this.configuracion2.get('timema').value;
    this.dfcap.fcap.time.extraAlto =  this.configuracion2.get('timeea').value;
    this.dfcap.fcap.stor.nominal =  this.configuracion2.get('storn').value;
    this.dfcap.fcap.stor.alto =  this.configuracion2.get('stora').value;
    this.dfcap.fcap.stor.muyAlto =  this.configuracion2.get('storma').value;
    this.dfcap.fcap.stor.extraAlto =  this.configuracion2.get('storea').value;
    this.dfcap.fcap.pvol.bajo =  this.configuracion2.get('pvolb').value;
    this.dfcap.fcap.pvol.nominal =  this.configuracion2.get('pvoln').value;
    this.dfcap.fcap.pvol.alto =  this.configuracion2.get('pvola').value;
    this.dfcap.fcap.pvol.muyAlto =  this.configuracion2.get('pvolma').value;
    this.dfcap.fcap.acap.muyBajo =  this.configuracion2.get('acapmb').value;
    this.dfcap.fcap.acap.bajo =  this.configuracion2.get('acapb').value;
    this.dfcap.fcap.acap.nominal =  this.configuracion2.get('acapn').value;
    this.dfcap.fcap.acap.alto =  this.configuracion2.get('acapa').value;
    this.dfcap.fcap.acap.muyAlto =  this.configuracion2.get('acapma').value;
    this.dfcap.fcap.pcap.muyBajo =  this.configuracion2.get('pcapmb').value;
    this.dfcap.fcap.pcap.bajo =  this.configuracion2.get('pcapb').value;
    this.dfcap.fcap.pcap.nominal =  this.configuracion2.get('pcapn').value;
    this.dfcap.fcap.pcap.alto =  this.configuracion2.get('pcapa').value;
    this.dfcap.fcap.pcap.muyAlto =  this.configuracion2.get('pcapma').value;
    this.dfcap.fcap.pcon.muyBajo =  this.configuracion2.get('pconmb').value;
    this.dfcap.fcap.pcon.bajo =  this.configuracion2.get('pconb').value;
    this.dfcap.fcap.pcon.nominal =  this.configuracion2.get('pconn').value;
    this.dfcap.fcap.pcon.alto =  this.configuracion2.get('pcona').value;
    this.dfcap.fcap.pcon.muyAlto =  this.configuracion2.get('pconma').value;
    this.dfcap.fcap.apex.muyBajo =  this.configuracion2.get('apexmb').value;
    this.dfcap.fcap.apex.bajo =  this.configuracion2.get('apexb').value;
    this.dfcap.fcap.apex.nominal =  this.configuracion2.get('apexn').value;
    this.dfcap.fcap.apex.alto =  this.configuracion2.get('apexa').value;
    this.dfcap.fcap.apex.muyAlto =  this.configuracion2.get('apexma').value;
    this.dfcap.fcap.plex.muyBajo =  this.configuracion2.get('plexmb').value;
    this.dfcap.fcap.plex.bajo =  this.configuracion2.get('plexb').value;
    this.dfcap.fcap.plex.nominal =  this.configuracion2.get('plexn').value;
    this.dfcap.fcap.plex.alto =  this.configuracion2.get('plexa').value;
    this.dfcap.fcap.plex.muyAlto =  this.configuracion2.get('plexma').value;
    this.dfcap.fcap.ltex.muyBajo =  this.configuracion2.get('ltexmb').value;
    this.dfcap.fcap.ltex.bajo =  this.configuracion2.get('ltexb').value;
    this.dfcap.fcap.ltex.nominal =  this.configuracion2.get('ltexn').value;
    this.dfcap.fcap.ltex.alto =  this.configuracion2.get('ltexa').value;
    this.dfcap.fcap.ltex.muyAlto =  this.configuracion2.get('ltexma').value;
    this.dfcap.fcap.tool.muyBajo =  this.configuracion2.get('toolmb').value;
    this.dfcap.fcap.tool.bajo =  this.configuracion2.get('toolb').value;
    this.dfcap.fcap.tool.nominal =  this.configuracion2.get('tooln').value;
    this.dfcap.fcap.tool.alto =  this.configuracion2.get('toola').value;
    this.dfcap.fcap.tool.muyAlto =  this.configuracion2.get('toolma').value;
    this.dfcap.fcap.site.muyBajo =  this.configuracion2.get('sitemb').value;
    this.dfcap.fcap.site.bajo =  this.configuracion2.get('siteb').value;
    this.dfcap.fcap.site.nominal =  this.configuracion2.get('siten').value;
    this.dfcap.fcap.site.alto =  this.configuracion2.get('sitea').value;
    this.dfcap.fcap.site.muyAlto =  this.configuracion2.get('sitema').value;
    this.dfcap.fcap.site.extraAlto =  this.configuracion2.get('siteea').value;
    this.dfcap.fcap.sced.muyBajo =  this.configuracion2.get('scedamb').value;
    this.dfcap.fcap.sced.bajo =  this.configuracion2.get('scedab').value;
    this.dfcap.fcap.sced.nominal =  this.configuracion2.get('scedan').value;
    this.dfcap.fcap.sced.alto =  this.configuracion2.get('scedaa').value;
    this.dfcap.fcap.sced.muyAlto =  this.configuracion2.get('scedama').value;
  }

  onUpdateForm2() {
    this.onForm2();
    this.updateFCAP('3', true);
  }

  onFormR2() {
    this.dfcap.fcap.rely.muyBajo =  this.cdfcap.fcap.rely.muyBajo;
    this.dfcap.fcap.rely.bajo =  this.cdfcap.fcap.rely.bajo;
    this.dfcap.fcap.rely.nominal =  this.cdfcap.fcap.rely.nominal;
    this.dfcap.fcap.rely.alto =  this.cdfcap.fcap.rely.alto;
    this.dfcap.fcap.rely.muyAlto =  this.cdfcap.fcap.rely.muyAlto;
    this.dfcap.fcap.data.bajo =  this.cdfcap.fcap.data.bajo;
    this.dfcap.fcap.data.nominal =  this.cdfcap.fcap.data.nominal;
    this.dfcap.fcap.data.alto =  this.cdfcap.fcap.data.alto;
    this.dfcap.fcap.data.muyAlto =  this.cdfcap.fcap.data.muyAlto;
    this.dfcap.fcap.cplx.muyBajo =  this.cdfcap.fcap.cplx.muyBajo;
    this.dfcap.fcap.cplx.bajo =  this.cdfcap.fcap.cplx.bajo;
    this.dfcap.fcap.cplx.nominal =  this.cdfcap.fcap.cplx.nominal;
    this.dfcap.fcap.cplx.alto =  this.cdfcap.fcap.cplx.alto;
    this.dfcap.fcap.cplx.muyAlto =  this.cdfcap.fcap.cplx.muyAlto;
    this.dfcap.fcap.cplx.extraAlto =  this.cdfcap.fcap.cplx.extraAlto;
    this.dfcap.fcap.ruse.bajo =  this.cdfcap.fcap.ruse.bajo;
    this.dfcap.fcap.ruse.nominal =  this.cdfcap.fcap.ruse.nominal;
    this.dfcap.fcap.ruse.alto =  this.cdfcap.fcap.ruse.alto;
    this.dfcap.fcap.ruse.muyAlto =  this.cdfcap.fcap.ruse.muyAlto;
    this.dfcap.fcap.ruse.muyAlto =  this.cdfcap.fcap.ruse.extraAlto;
    this.dfcap.fcap.docu.muyBajo =  this.cdfcap.fcap.docu.muyBajo;
    this.dfcap.fcap.docu.bajo =  this.cdfcap.fcap.docu.bajo;
    this.dfcap.fcap.docu.nominal =  this.cdfcap.fcap.docu.nominal;
    this.dfcap.fcap.docu.alto =  this.cdfcap.fcap.docu.alto;
    this.dfcap.fcap.docu.muyAlto =  this.cdfcap.fcap.docu.muyAlto;
    this.dfcap.fcap.time.nominal =  this.cdfcap.fcap.time.nominal;
    this.dfcap.fcap.time.alto =  this.cdfcap.fcap.time.alto;
    this.dfcap.fcap.time.muyAlto =  this.cdfcap.fcap.time.muyAlto;
    this.dfcap.fcap.time.muyAlto =  this.cdfcap.fcap.time.extraAlto;
    this.dfcap.fcap.stor.nominal =  this.cdfcap.fcap.stor.nominal;
    this.dfcap.fcap.stor.alto =  this.cdfcap.fcap.stor.alto;
    this.dfcap.fcap.stor.muyAlto =  this.cdfcap.fcap.stor.muyAlto;
    this.dfcap.fcap.stor.muyAlto =  this.cdfcap.fcap.stor.extraAlto;
    this.dfcap.fcap.pvol.bajo =  this.cdfcap.fcap.pvol.bajo;
    this.dfcap.fcap.pvol.nominal =  this.cdfcap.fcap.pvol.nominal;
    this.dfcap.fcap.pvol.alto =  this.cdfcap.fcap.pvol.alto;
    this.dfcap.fcap.pvol.muyAlto =  this.cdfcap.fcap.pvol.muyAlto;
    this.dfcap.fcap.acap.muyBajo =  this.cdfcap.fcap.acap.muyBajo;
    this.dfcap.fcap.acap.bajo =  this.cdfcap.fcap.acap.bajo;
    this.dfcap.fcap.acap.nominal =  this.cdfcap.fcap.acap.nominal;
    this.dfcap.fcap.acap.alto =  this.cdfcap.fcap.acap.alto;
    this.dfcap.fcap.acap.muyAlto =  this.cdfcap.fcap.acap.muyAlto;
    this.dfcap.fcap.pcap.muyBajo =  this.cdfcap.fcap.pcap.muyBajo;
    this.dfcap.fcap.pcap.bajo =  this.cdfcap.fcap.pcap.bajo;
    this.dfcap.fcap.pcap.nominal =  this.cdfcap.fcap.pcap.nominal;
    this.dfcap.fcap.pcap.alto =  this.cdfcap.fcap.pcap.alto;
    this.dfcap.fcap.pcap.muyAlto =  this.cdfcap.fcap.pcap.muyAlto;
    this.dfcap.fcap.pcon.muyBajo =  this.cdfcap.fcap.pcon.muyBajo;
    this.dfcap.fcap.pcon.bajo =  this.cdfcap.fcap.pcon.bajo;
    this.dfcap.fcap.pcon.nominal =  this.cdfcap.fcap.pcon.nominal;
    this.dfcap.fcap.pcon.alto =  this.cdfcap.fcap.pcon.alto;
    this.dfcap.fcap.pcon.muyAlto =  this.cdfcap.fcap.pcon.muyAlto;
    this.dfcap.fcap.apex.muyBajo =  this.cdfcap.fcap.apex.muyBajo;
    this.dfcap.fcap.apex.bajo =  this.cdfcap.fcap.apex.bajo;
    this.dfcap.fcap.apex.nominal =  this.cdfcap.fcap.apex.nominal;
    this.dfcap.fcap.apex.alto =  this.cdfcap.fcap.apex.alto;
    this.dfcap.fcap.apex.muyAlto =  this.cdfcap.fcap.apex.muyAlto;
    this.dfcap.fcap.plex.muyBajo =  this.cdfcap.fcap.plex.muyBajo;
    this.dfcap.fcap.plex.bajo =  this.cdfcap.fcap.plex.bajo;
    this.dfcap.fcap.plex.nominal =  this.cdfcap.fcap.plex.nominal;
    this.dfcap.fcap.plex.alto =  this.cdfcap.fcap.plex.alto;
    this.dfcap.fcap.plex.muyAlto =  this.cdfcap.fcap.plex.muyAlto;
    this.dfcap.fcap.ltex.muyBajo =  this.cdfcap.fcap.ltex.muyBajo;
    this.dfcap.fcap.ltex.bajo =  this.cdfcap.fcap.ltex.bajo;
    this.dfcap.fcap.ltex.nominal =  this.cdfcap.fcap.ltex.nominal;
    this.dfcap.fcap.ltex.alto =  this.cdfcap.fcap.ltex.alto;
    this.dfcap.fcap.ltex.muyAlto =  this.cdfcap.fcap.ltex.muyAlto;
    this.dfcap.fcap.tool.muyBajo =  this.cdfcap.fcap.tool.muyBajo;
    this.dfcap.fcap.tool.bajo =  this.cdfcap.fcap.tool.bajo;
    this.dfcap.fcap.tool.nominal =  this.cdfcap.fcap.tool.nominal;
    this.dfcap.fcap.tool.alto =  this.cdfcap.fcap.tool.alto;
    this.dfcap.fcap.tool.muyAlto =  this.cdfcap.fcap.tool.muyAlto;
    this.dfcap.fcap.site.muyBajo =  this.cdfcap.fcap.site.muyBajo;
    this.dfcap.fcap.site.bajo =  this.cdfcap.fcap.site.bajo;
    this.dfcap.fcap.site.nominal =  this.cdfcap.fcap.site.nominal;
    this.dfcap.fcap.site.alto =  this.cdfcap.fcap.site.alto;
    this.dfcap.fcap.site.muyAlto =  this.cdfcap.fcap.site.muyAlto;
    this.dfcap.fcap.site.extraAlto =  this.cdfcap.fcap.site.extraAlto;
    this.dfcap.fcap.sced.muyBajo =  this.cdfcap.fcap.sced.muyBajo;
    this.dfcap.fcap.sced.bajo =  this.cdfcap.fcap.sced.bajo;
    this.dfcap.fcap.sced.nominal =  this.cdfcap.fcap.sced.nominal;
    this.dfcap.fcap.sced.alto =  this.cdfcap.fcap.sced.alto;
    this.dfcap.fcap.sced.muyAlto =  this.cdfcap.fcap.sced.muyAlto;
  }

  onRestablecerForm2() {
    this.onFormR2();
    this.updateFCAP('3', false);
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
        this.onActualizar1();
      },
      err => console.log(err)
    );
  }

  getFCAP(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.dfcap = res;
        console.log(this.dfcap);
        this.onActualizar2();
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
        this.cocomollComponent.getFS('1');
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
        this.cocomollComponent.getFCDI('2');
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
        this.cocomollComponent.getFCAP('3');
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

  get perseb() {
    return this.configuracion1.get('perseb');
  }

  get persmb() {
    return this.configuracion1.get('persmb');
  }

  get persb() {
    return this.configuracion1.get('persb');
  }

  get persn() {
    return this.configuracion1.get('persn');
  }

  get persa() {
    return this.configuracion1.get('persa');
  }

  get persma() {
    return this.configuracion1.get('persma');
  }

  get persea() {
    return this.configuracion1.get('persea');
  }

  get rcpxeb() {
    return this.configuracion1.get('rcpxeb');
  }

  get rcpxmb() {
    return this.configuracion1.get('rcpxmb');
  }

  get rcpxb() {
    return this.configuracion1.get('rcpxb');
  }

  get rcpxn() {
    return this.configuracion1.get('rcpxn');
  }

  get rcpxa() {
    return this.configuracion1.get('rcpxa');
  }

  get rcpxma() {
    return this.configuracion1.get('rcpxma');
  }

  get rcpxea() {
    return this.configuracion1.get('rcpxea');
  }

  get ruseb() {
    return this.configuracion1.get('ruseb');
  }

  get rusen() {
    return this.configuracion1.get('rusen');
  }

  get rusea() {
    return this.configuracion1.get('rusea');
  }

  get rusema() {
    return this.configuracion1.get('rusema');
  }

  get ruseea() {
    return this.configuracion1.get('ruseea');
  }

  get pdifb() {
    return this.configuracion1.get('pdifb');
  }

  get pdifn() {
    return this.configuracion1.get('pdifn');
  }

  get pdifa() {
    return this.configuracion1.get('pdifa');
  }

  get pdifma() {
    return this.configuracion1.get('pdifma');
  }

  get pdifea() {
    return this.configuracion1.get('pdifea');
  }

  get prexeb() {
    return this.configuracion1.get('prexeb');
  }

  get prexmb() {
    return this.configuracion1.get('prexmb');
  }

  get prexb() {
    return this.configuracion1.get('prexb');
  }

  get prexn() {
    return this.configuracion1.get('prexn');
  }

  get prexa() {
    return this.configuracion1.get('prexa');
  }

  get prexma() {
    return this.configuracion1.get('prexma');
  }

  get prexea() {
    return this.configuracion1.get('prexea');
  }

  get fcileb() {
    return this.configuracion1.get('fcileb');
  }

  get fcilmb() {
    return this.configuracion1.get('fcilmb');
  }

  get fcilb() {
    return this.configuracion1.get('fcilb');
  }

  get fciln() {
    return this.configuracion1.get('fciln');
  }

  get fcila() {
    return this.configuracion1.get('fcila');
  }

  get fcilma() {
    return this.configuracion1.get('fcilma');
  }

  get fcilea() {
    return this.configuracion1.get('fcilea');
  }

  get scedmb() {
    return this.configuracion1.get('scedmb');
  }

  get scedb() {
    return this.configuracion1.get('scedb');
  }

  get scedn() {
    return this.configuracion1.get('scedn');
  }

  get sceda() {
    return this.configuracion1.get('sceda');
  }

  get scedma() {
    return this.configuracion1.get('scedma');
  }

  get relymb() {
    return this.configuracion2.get('relymb');
  }

  get relyb() {
    return this.configuracion2.get('relyb');
  }

  get relyn() {
    return this.configuracion2.get('relyn');
  }

  get relya() {
    return this.configuracion2.get('relya');
  }

  get relyma() {
    return this.configuracion2.get('relyma');
  }

  get datab() {
    return this.configuracion2.get('datab');
  }

  get datan() {
    return this.configuracion2.get('datan');
  }

  get dataa() {
    return this.configuracion2.get('dataa');
  }

  get datama() {
    return this.configuracion2.get('datama');
  }

  get cplxmb() {
    return this.configuracion2.get('cplxmb');
  }

  get cplxb() {
    return this.configuracion2.get('cplxb');
  }

  get cplxn() {
    return this.configuracion2.get('cplxn');
  }

  get cplxa() {
    return this.configuracion2.get('cplxa');
  }

  get cplxma() {
    return this.configuracion2.get('cplxma');
  }

  get cplxea() {
    return this.configuracion2.get('cplxea');
  }

  get ruseab() {
    return this.configuracion2.get('ruseab');
  }

  get rusean() {
    return this.configuracion2.get('rusean');
  }

  get ruseaa() {
    return this.configuracion2.get('ruseaa');
  }

  get ruseama() {
    return this.configuracion2.get('ruseama');
  }

  get ruseaea() {
    return this.configuracion2.get('ruseaea');
  }

  get documb() {
    return this.configuracion2.get('documb');
  }

  get docub() {
    return this.configuracion2.get('docub');
  }

  get docun() {
    return this.configuracion2.get('docun');
  }

  get docua() {
    return this.configuracion2.get('docua');
  }

  get documa() {
    return this.configuracion2.get('documa');
  }

  get timen() {
    return this.configuracion2.get('timen');
  }

  get timea() {
    return this.configuracion2.get('timea');
  }

  get timema() {
    return this.configuracion2.get('timema');
  }

  get timeea() {
    return this.configuracion2.get('timeea');
  }

  get storn() {
    return this.configuracion2.get('storn');
  }

  get stora() {
    return this.configuracion2.get('stora');
  }

  get storma() {
    return this.configuracion2.get('storma');
  }

  get storea() {
    return this.configuracion2.get('storea');
  }

  get pvolb() {
    return this.configuracion2.get('pvolb');
  }

  get pvoln() {
    return this.configuracion2.get('pvoln');
  }

  get pvola() {
    return this.configuracion2.get('pvola');
  }

  get pvolma() {
    return this.configuracion2.get('pvolma');
  }

  get acapmb() {
    return this.configuracion2.get('acapmb');
  }

  get acapb() {
    return this.configuracion2.get('acapb');
  }

  get acapn() {
    return this.configuracion2.get('acapn');
  }

  get acapa() {
    return this.configuracion2.get('acapa');
  }

  get acapma() {
    return this.configuracion2.get('acapma');
  }

  get pcapmb() {
    return this.configuracion2.get('acapmb');
  }

  get pcapb() {
    return this.configuracion2.get('acapb');
  }

  get pcapn() {
    return this.configuracion2.get('acapn');
  }

  get pcapa() {
    return this.configuracion2.get('acapa');
  }

  get pcapma() {
    return this.configuracion2.get('acapma');
  }

  get pconmb() {
    return this.configuracion2.get('pconmb');
  }

  get pconb() {
    return this.configuracion2.get('pconb');
  }

  get pconn() {
    return this.configuracion2.get('pconn');
  }

  get pcona() {
    return this.configuracion2.get('pcona');
  }

  get pconma() {
    return this.configuracion2.get('pconma');
  }

  get apexmb() {
    return this.configuracion2.get('apexmb');
  }

  get apexb() {
    return this.configuracion2.get('apexb');
  }

  get apexn() {
    return this.configuracion2.get('apexn');
  }

  get apexa() {
    return this.configuracion2.get('apexa');
  }

  get apexma() {
    return this.configuracion2.get('apexma');
  }

  get plexmb() {
    return this.configuracion2.get('plexmb');
  }

  get plexb() {
    return this.configuracion2.get('plexb');
  }

  get plexn() {
    return this.configuracion2.get('plexn');
  }

  get plexa() {
    return this.configuracion2.get('plexa');
  }

  get plexma() {
    return this.configuracion2.get('plexma');
  }

  get ltexmb() {
    return this.configuracion2.get('ltexmb');
  }

  get ltexb() {
    return this.configuracion2.get('ltexb');
  }

  get ltexn() {
    return this.configuracion2.get('ltexn');
  }

  get ltexa() {
    return this.configuracion2.get('ltexa');
  }

  get ltexma() {
    return this.configuracion2.get('ltexma');
  }

  get toolmb() {
    return this.configuracion2.get('toolmb');
  }

  get toolb() {
    return this.configuracion2.get('toolb');
  }

  get tooln() {
    return this.configuracion2.get('tooln');
  }

  get toola() {
    return this.configuracion2.get('toola');
  }

  get toolma() {
    return this.configuracion2.get('toolma');
  }

  get sitemb() {
    return this.configuracion2.get('sitemb');
  }

  get siteb() {
    return this.configuracion2.get('siteb');
  }

  get siten() {
    return this.configuracion2.get('siten');
  }

  get sitea() {
    return this.configuracion2.get('sitea');
  }

  get sitema() {
    return this.configuracion2.get('sitema');
  }

  get siteea() {
    return this.configuracion2.get('siteea');
  }

  get scedamb() {
    return this.configuracion2.get('scedamb');
  }

  get scedab() {
    return this.configuracion2.get('scedab');
  }

  get scedan() {
    return this.configuracion2.get('scedan');
  }

  get scedaa() {
    return this.configuracion2.get('scedaa');
  }

  get scedama() {
    return this.configuracion2.get('scedama');
  }

}
