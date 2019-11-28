import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { CocomollService } from '../../services/cocomoll.service';
import { Dfs } from 'src/app/models/dfs';
import { Dfcdi } from 'src/app/models/dfcdi';
import { Dfcap } from 'src/app/models/dfcap';
import { Estimacion } from 'src/app/models/estimacion';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cocomoll',
  templateUrl: './cocomoll.component.html',
  styleUrls: ['./cocomoll.component.css']
})
export class CocomollComponent implements OnInit {
  // json-server --watch db.json --port 3004
  identidad: any;
  token: string;

  diseno = 0;
  projects: any = {};

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

  est0: Estimacion = {
    idProject: 0,
    linesCode: 0,
    prec: 0,
    flex: 0,
    rels: 0,
    team: 0,
    pmat: 0,
    pers: 0,
    rcpx: 0,
    ruse: 0,
    pdif: 0,
    prex: 0,
    fcil: 0,
    sced: 0
  };

  est1: Estimacion = {
    idProject: 0,
    linesCode: 0,
    prec: 0,
    flex: 0,
    rels: 0,
    team: 0,
    pmat: 0,
    rely: 0,
    data: 0,
    cplx: 0,
    ruse: 0,
    docu: 0,
    time: 0,
    stor: 0,
    pvol: 0,
    acap: 0,
    pcap: 0,
    pcon: 0,
    apex: 0,
    plex: 0,
    ltex: 0,
    tool: 0,
    site: 0,
    sced: 0
  };

  estimacion: FormGroup;
  estimacion0: FormGroup;
  estimacion1: FormGroup;
  estimacion2: FormGroup;

  createFormGroup() {
    return new FormGroup({
      idProject: new FormControl('', Validators.required),
      linesCode: new FormControl('', Validators.required),
      prec: new FormControl('', Validators.required),
      flex: new FormControl('', Validators.required),
      rels: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      pmat: new FormControl('', Validators.required)
    });
  }

  createFormGroup0() {
    return new FormGroup({
      pers: new FormControl('', Validators.required),
      rcpx: new FormControl('', Validators.required),
      ruse: new FormControl('', Validators.required),
      pdif: new FormControl('', Validators.required),
      prex: new FormControl('', Validators.required),
      fcil: new FormControl('', Validators.required),
      sced: new FormControl('', Validators.required)
    });
  }

  createFormGroup1() {
    return new FormGroup({
      rely: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      cplx: new FormControl('', Validators.required),
      rusea: new FormControl('', Validators.required),
      docu: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      stor: new FormControl('', Validators.required),
      pvol: new FormControl('', Validators.required),
      acap: new FormControl('', Validators.required),
      pcap: new FormControl('', Validators.required),
      pcon: new FormControl('', Validators.required),
      apex: new FormControl('', Validators.required),
      plex: new FormControl('', Validators.required),
      ltex: new FormControl('', Validators.required),
      tool: new FormControl('', Validators.required),
      site: new FormControl('', Validators.required),
      sceda: new FormControl('', Validators.required)
    });
  }

  createFormGroup2() {
    return new FormGroup({
      pm: new FormControl('', Validators.required),
      tdev: new FormControl('', Validators.required)
    });
  }

  constructor(private cocomollService: CocomollService, private projectsService: ProjectsService, private usersService: UsersService) {
    this.estimacion = this.createFormGroup();
    this.estimacion0 = this.createFormGroup0();
    this.estimacion1 = this.createFormGroup1();
    this.estimacion2 = this.createFormGroup2();
    this.identidad = this.usersService.getIdentidad();
    this.token = this.usersService.getIdentidad();
  }

  ngOnInit() {
    this.getProjects();
    this.getFS('1');
    this.getFCDI('2');
    this.getFCAP('3');
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
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

  saveEstimateDI() {
    this.cocomollService.saveEstimateDI(this.est0).subscribe(
      res => {
        console.log(res);
        alert('Estimacion Realizada');
        this.estimacion2.get('pm').setValue(res.resultEstimate.PM);
        this.estimacion2.get('tdev').setValue(res.resultEstimate.TDEV);
      },
      err => console.log(err)
    );
  }

  saveEstimateAP() {
    this.cocomollService.saveEstimateAP(this.est1).subscribe(
      res => {
        console.log(res);
        alert('Estimacion Realizada');
        this.estimacion2.get('pm').setValue(res.resultEstimate.PM);
        this.estimacion2.get('tdev').setValue(res.resultEstimate.TDEV);
      },
      err => console.log(err)
    );
  }

  onFormEst0() {
    this.est0.idProject = this.estimacion.get('idProject').value;
    this.est0.linesCode = this.estimacion.get('linesCode').value;
    this.est0.prec = this.estimacion.get('prec').value;
    this.est0.flex = this.estimacion.get('flex').value;
    this.est0.rels = this.estimacion.get('rels').value;
    this.est0.team = this.estimacion.get('team').value;
    this.est0.pmat = this.estimacion.get('pmat').value;
    this.est0.pers = this.estimacion0.get('pers').value;
    this.est0.rcpx = this.estimacion0.get('rcpx').value;
    this.est0.ruse = this.estimacion0.get('ruse').value;
    this.est0.pdif = this.estimacion0.get('pdif').value;
    this.est0.prex = this.estimacion0.get('prex').value;
    this.est0.fcil = this.estimacion0.get('fcil').value;
    this.est0.sced = this.estimacion0.get('sced').value;
  }

  onSetFormEst0() {
    this.onFormEst0();
    this.saveEstimateDI();
  }

  onFormEst1() {
    this.est1.idProject = this.estimacion.get('idProject').value;
    this.est1.linesCode = this.estimacion.get('linesCode').value;
    this.est1.prec = this.estimacion.get('prec').value;
    this.est1.flex = this.estimacion.get('flex').value;
    this.est1.rels = this.estimacion.get('rels').value;
    this.est1.team = this.estimacion.get('team').value;
    this.est1.pmat = this.estimacion.get('pmat').value;
    this.est1.rely = this.estimacion1.get('rely').value;
    this.est1.data = this.estimacion1.get('data').value;
    this.est1.cplx = this.estimacion1.get('cplx').value;
    this.est1.ruse = this.estimacion1.get('rusea').value;
    this.est1.docu = this.estimacion1.get('docu').value;
    this.est1.time = this.estimacion1.get('time').value;
    this.est1.stor = this.estimacion1.get('stor').value;
    this.est1.pvol = this.estimacion1.get('pvol').value;
    this.est1.acap = this.estimacion1.get('acap').value;
    this.est1.pcap = this.estimacion1.get('pcap').value;
    this.est1.pcon = this.estimacion1.get('pcon').value;
    this.est1.apex = this.estimacion1.get('apex').value;
    this.est1.plex = this.estimacion1.get('plex').value;
    this.est1.ltex = this.estimacion1.get('ltex').value;
    this.est1.tool = this.estimacion1.get('tool').value;
    this.est1.site = this.estimacion1.get('site').value;
    this.est1.sced = this.estimacion1.get('sceda').value;
  }

  onSetFormEst1() {
    this.onFormEst1();
    this.saveEstimateAP();
  }

  get idProject() {
    return this.estimacion.get('idProject');
  }

  get linesCode() {
    return this.estimacion.get('linesCode');
  }

  get prec() {
    return this.estimacion.get('prec');
  }

  get flex() {
    return this.estimacion.get('flex');
  }

  get rels() {
    return this.estimacion.get('rels');
  }

  get team() {
    return this.estimacion.get('team');
  }

  get pmat() {
    return this.estimacion.get('pmat');
  }

  get pers() {
    return this.estimacion0.get('pers');
  }

  get rcpx() {
    return this.estimacion0.get('rcpx');
  }

  get ruse() {
    return this.estimacion0.get('ruse');
  }

  get pdif() {
    return this.estimacion0.get('pdif');
  }

  get prex() {
    return this.estimacion0.get('prex');
  }

  get fcil() {
    return this.estimacion0.get('fcil');
  }

  get sced() {
    return this.estimacion0.get('sced');
  }

  get rely() {
    return this.estimacion1.get('rely');
  }

  get data() {
    return this.estimacion1.get('data');
  }

  get cplx() {
    return this.estimacion1.get('cplx');
  }

  get rusea() {
    return this.estimacion1.get('rusea');
  }

  get docu() {
    return this.estimacion1.get('docu');
  }
  get time() {
    return this.estimacion1.get('time');
  }

  get stor() {
    return this.estimacion1.get('stor');
  }

  get pvol() {
    return this.estimacion1.get('pvol');
  }

  get acap() {
    return this.estimacion1.get('acap');
  }

  get pcap() {
    return this.estimacion1.get('pcap');
  }
  get pcon() {
    return this.estimacion1.get('pcon');
  }

  get apex() {
    return this.estimacion1.get('apex');
  }

  get plex() {
    return this.estimacion1.get('plex');
  }

  get ltex() {
    return this.estimacion1.get('ltex');
  }

  get tool() {
    return this.estimacion1.get('tool');
  }

  get site() {
    return this.estimacion1.get('site');
  }

  get sceda() {
    return this.estimacion1.get('sceda');
  }

}
