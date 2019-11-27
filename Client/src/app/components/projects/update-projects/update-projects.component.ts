import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrls: ['./update-projects.component.css']
})
export class UpdateProjectsComponent implements OnInit {

  proje: Project = {
    projectName: '',
    type: 0
  };

  getProject: any = {};

  actualizar: FormGroup;

  createFormGroup() {
    return new FormGroup({
      namep: new FormControl('', [Validators.required, Validators.minLength(4)]),
      type: new FormControl('', [Validators.required])
    });
  }

  constructor(private projectsService: ProjectsService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroup();
    this.getProject = this.homeComponent.getProject();
  }

  ngOnInit() {
    this.onActualizar();
  }

  onActualizar() {
    this.actualizar.get('namep').setValue(this.getProject.Nombre_Proyecto);
    this.actualizar.get('type').setValue(this.getProject.Tipo_Proyecto_id_Tipo);
  }

  onResetForm() {
    this.actualizar.reset();
  }

  onForm() {
    this.proje.projectName = this.actualizar.get('namep').value;
    this.proje.type = this.actualizar.get('type').value;
  }

  onUpdateForm() {
    if (this.actualizar.valid) {
      this.onForm();
      this.projectsService.updateProject(this.getProject.id_proyecto, this.proje).subscribe(
        res => {
          console.log(res);
          alert('Proyecto Actualizado');
          this.router.navigate(['/home/projects']);
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetForm();
    } else {
      console.log('Not Valid');
    }
  }

  get namep() {
    return this.actualizar.get('namep');
  }

  get type() {
    return this.actualizar.get('type');
  }
}
