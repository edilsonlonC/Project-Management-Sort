import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { CocomollService } from '../../services/cocomoll.service';
import { Datos } from 'src/app/models/datos';

@Component({
  selector: 'app-cocomoll',
  templateUrl: './cocomoll.component.html',
  styleUrls: ['./cocomoll.component.css']
})
export class CocomollComponent implements OnInit {

  diseno = 1;
  projects: any = {};
  JSONs: any = {};
  JSON: any = {};

  datos: Datos = {
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

  constructor(private cocomollService: CocomollService, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.getJSONs();
    this.getJSON('1');
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
      },
      err => console.log(err)
    );
  }

  getJSONs() {
    this.cocomollService.getJSONs().subscribe(
      res => {
        this.JSONs = res;
        console.log(this.JSONs);
      },
      err => console.log(err)
    );
  }

  getJSON(id: string) {
    this.cocomollService.getJSON(id).subscribe(
      res => {
        this.JSON = res;
        console.log(this.JSON);
      },
      err => console.log(err)
    );
  }

  updateJSON(id: string) {
    this.cocomollService.updateJSON(id, this.datos).subscribe(
      res => {
        console.log(this.datos);
      },
      err => console.log(err)
    );
  }

}
