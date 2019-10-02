import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { ActivitiesService } from '../../../services/activities.service';
import { Activity } from '../../../models/activity';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-activities',
  templateUrl: './update-activities.component.html',
  styleUrls: ['./update-activities.component.css']
})
export class UpdateActivitiesComponent implements OnInit {

  activity: Activity = {
    activityName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  actualizar: FormGroup;
  getActivity: any = {};
  projects: any = {};

  createFormGroupA() {
    return new FormGroup({
      namea: new FormControl('', [Validators.required]),
      descripciona: new FormControl('', [Validators.maxLength(500)]),
      proyectoa: new FormControl('', [Validators.required]),
      responsablea: new FormControl('', [Validators.required]),
      estadoa: new FormControl('', [Validators.required]),
      prioridada: new FormControl('', [Validators.required])
    });
  }


  // tslint:disable-next-line:max-line-length
  constructor(private projectsService: ProjectsService, private activitiesService: ActivitiesService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroupA();
    this.getActivity = this.homeComponent.getActivity();
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

  onResetFormA() {
    this.actualizar.reset();
  }

  onActualizar() {
    this.actualizar.get('namea').setValue(this.getActivity.nombre_actividad);
    this.actualizar.get('descripciona').setValue(this.getActivity.descripcion);
    this.actualizar.get('proyectoa').setValue(this.getActivity.Proyecto_id_proyecto);
    this.actualizar.get('responsablea').setValue(this.getActivity.responsable);
    this.actualizar.get('estadoa').setValue(this.getActivity.Tipo_estado_id_estado);
    this.actualizar.get('prioridada').setValue(this.getActivity.Prioridad_id_prioridad);
  }

  onFormA() {
    this.activity.activityName = this.actualizar.get('namea').value;
    this.activity.description = this.actualizar.get('descripciona').value;
    this.activity.idProject = this.actualizar.get('proyectoa').value;
    this.activity.responsable = this.actualizar.get('responsablea').value;
    this.activity.stateType = this.actualizar.get('estadoa').value;
    this.activity.priority = this.actualizar.get('prioridada').value;
  }

  onUpdateFormA() {
    if (this.actualizar.valid) {
      this.onFormA();
      this.activitiesService.updateActivity(this.getActivity.id_actividades, this.activity).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home/resources']);
          alert('Actividad Actualizada');
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormA();
    } else {
      console.log('Not Valid');
    }
  }

  get namea() {
    return this.actualizar.get('namea');
  }

  get descripciona() {
    return this.actualizar.get('descripciona');
  }

  get proyectoa() {
    return this.actualizar.get('proyectoa');
  }

  get responsablea() {
    return this.actualizar.get('responsablea');
  }

  get estadoa() {
    return this.actualizar.get('estadoa');
  }

  get prioridada() {
    return this.actualizar.get('prioridada');
  }

  get datea() {
    return this.actualizar.get('datea');
  }
}
