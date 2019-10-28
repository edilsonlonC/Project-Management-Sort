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

  configuracion: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      hours: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    });
  }

  constructor(private cocomollService: CocomollService) {
    this.configuracion = this.createFormGroup();
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

  updateFS(id: string) {
    this.cocomollService.updateJSON(id, this.dfs).subscribe(
      res => {
        console.log(this.dfs);
        this.getPS('1');
      },
      err => console.log(err)
    );
  }

  updateFCDI(id: string) {
    this.cocomollService.updateJSON(id, this.dfcdi).subscribe(
      res => {
        console.log(this.dfcdi);
        this.getPS('2');
      },
      err => console.log(err)
    );
  }

  updateFCAP(id: string) {
    this.cocomollService.updateJSON(id, this.dfcap).subscribe(
      res => {
        console.log(this.dfcap);
        this.getPS('3');
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

}
