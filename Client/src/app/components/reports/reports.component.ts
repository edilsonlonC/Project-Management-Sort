import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  projects: any = {};
  formP: FormGroup;
  id = '';

  constructor(private projectsService: ProjectsService, private reportsService: ReportsService) {
    this.formP = this.createFormGroup();
  }

  ngOnInit() {
    this.getProjects();
  }

  createFormGroup() {
    return new FormGroup({
      idProject: new FormControl(1, Validators.required)
    });
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
      },
      err => console.log(err)
    );
  }

  getReport() {
    this.reportsService.getReport(this.id).subscribe(
      res => {
        this.projects = res;
      },
      err => console.log(err)
    );
  }

  get idProject() {
    return this.formP.get('idProject');
  }

  onSetReport() {
    this.id =  this.formP.get('idProject').value;
    console.log(this.id);
    window.open(`http://localhost:3000/api/report/${this.id}`);
  }

}
