import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { ResourcesService } from '../../../services/resources.service';
import { Resource } from '../../../models/resource';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-resources',
  templateUrl: './update-resources.component.html',
  styleUrls: ['./update-resources.component.css']
})
export class UpdateResourcesComponent implements OnInit {

  resource: Resource = {
    resourceName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  actualizar: FormGroup;
  getResource: any = {};
  projects: any = {};

  createFormGroupR() {
    return new FormGroup({
      namer: new FormControl('', [Validators.required]),
      descripcionr: new FormControl('', [Validators.maxLength(500)]),
      proyector: new FormControl('', [Validators.required]),
      responsabler: new FormControl('', [Validators.required]),
      estador: new FormControl('', [Validators.required]),
      prioridadr: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:max-line-length
  constructor(private projectsService: ProjectsService, private resourcesService: ResourcesService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroupR();
    this.getResource = this.homeComponent.getResource();
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

  onResetFormR() {
    this.actualizar.reset();
  }

  onActualizar() {
    this.actualizar.get('namer').setValue(this.getResource.nombre_recurso);
    this.actualizar.get('descripcionr').setValue(this.getResource.Descripcion);
    this.actualizar.get('proyector').setValue(this.getResource.Proyecto_id_proyecto);
    this.actualizar.get('responsabler').setValue(this.getResource.Responsable);
    this.actualizar.get('estador').setValue(this.getResource.Tipo_estado_id_estado);
    this.actualizar.get('prioridadr').setValue(this.getResource.Prioridad_id_prioridad);
  }

  onFormR() {
    this.resource.resourceName = this.actualizar.get('namer').value;
    this.resource.description = this.actualizar.get('descripcionr').value;
    this.resource.idProject = this.actualizar.get('proyector').value;
    this.resource.responsable = this.actualizar.get('responsabler').value;
    this.resource.stateType = this.actualizar.get('estador').value;
    this.resource.priority = this.actualizar.get('prioridadr').value;
  }

  onUpdateFormR() {
    if (this.actualizar.valid) {
      this.onFormR();
      this.resourcesService.updateResource(this.getResource.id_recursos, this.resource).subscribe(
        res => {
          console.log(res);
          alert('Recurso Actualizado');
          this.router.navigate(['/home/resources']);
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormR();
    } else {
      console.log('Not Valid');
    }
  }

  get namer() {
    return this.actualizar.get('namer');
  }

  get descripcionr() {
    return this.actualizar.get('descripcionr');
  }

  get proyector() {
    return this.actualizar.get('proyector');
  }

  get responsabler() {
    return this.actualizar.get('responsabler');
  }

  get estador() {
    return this.actualizar.get('estador');
  }

  get prioridadr() {
    return this.actualizar.get('prioridadr');
  }

  get dater() {
    return this.actualizar.get('dater');
  }
}
