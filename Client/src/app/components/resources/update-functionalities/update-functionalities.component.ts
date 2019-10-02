import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { FunctionalitiesService } from '../../../services/functionalities.service';
import { Functionality } from '../../../models/functionality';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-functionalities',
  templateUrl: './update-functionalities.component.html',
  styleUrls: ['./update-functionalities.component.css']
})
export class UpdateFunctionalitiesComponent implements OnInit {

  functionality: Functionality = {
    functionalityName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  actualizar: FormGroup;
  getFunctionality: any = {};
  projects: any = {};

  createFormGroupF() {
    return new FormGroup({
      namef: new FormControl('', [Validators.required]),
      descripcionf: new FormControl('', [Validators.maxLength(500)]),
      proyectof: new FormControl('', [Validators.required]),
      responsablef: new FormControl('', [Validators.required]),
      estadof: new FormControl('', [Validators.required]),
      prioridadf: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:max-line-length
  constructor(private projectsService: ProjectsService, private functionalitiesService: FunctionalitiesService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroupF();
    this.getFunctionality = this.homeComponent.getFunctionality();
  }

  ngOnInit() {
    this.getProjects();
    this.onActualizar();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
        console.log(this.projects);
      },
      err => console.log(err)
    );
  }

  onResetFormF() {
    this.actualizar.reset();
  }

  onActualizar() {
    this.actualizar.get('namef').setValue(this.getFunctionality.nombre_funcionalidad);
    this.actualizar.get('descripcionf').setValue(this.getFunctionality.descripcion);
    this.actualizar.get('proyectof').setValue(this.getFunctionality.Proyecto_id_proyecto);
    this.actualizar.get('responsablef').setValue(this.getFunctionality.responsable);
    this.actualizar.get('estadof').setValue(this.getFunctionality.Tipo_estado_id_estado);
    this.actualizar.get('prioridadf').setValue(this.getFunctionality.Prioridad_id_prioridad);
  }

  onFormF() {
    this.functionality.functionalityName = this.actualizar.get('namef').value;
    this.functionality.description = this.actualizar.get('descripcionf').value;
    this.functionality.idProject = this.actualizar.get('proyectof').value;
    this.functionality.responsable = this.actualizar.get('responsablef').value;
    this.functionality.stateType = this.actualizar.get('estadof').value;
    this.functionality.priority = this.actualizar.get('prioridadf').value;
  }

  onUpdateFormF() {
    if (this.actualizar.valid) {
      this.onFormF();
      this.functionalitiesService.updateFunctionality(this.getFunctionality.id_funcionalidad, this.functionality).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home/resources']);
          alert('Funcionalidad Registrada');
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormF();
    } else {
      console.log('Not Valid');
    }
  }

  get namef() {
    return this.actualizar.get('namef');
  }

  get descripcionf() {
    return this.actualizar.get('descripcionf');
  }

  get proyectof() {
    return this.actualizar.get('proyectof');
  }

  get responsablef() {
    return this.actualizar.get('responsablef');
  }

  get estadof() {
    return this.actualizar.get('estadof');
  }

  get prioridadf() {
    return this.actualizar.get('prioridadf');
  }

  get datef() {
    return this.actualizar.get('datef');
  }

}
