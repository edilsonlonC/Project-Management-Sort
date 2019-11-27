import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { ResourcesService } from '../../../services/resources.service';
import { ActivitiesService } from '../../../services/activities.service';
import { FunctionalitiesService } from '../../../services/functionalities.service';
import { TasksService } from '../../../services/tasks.service';
import { Resource } from '../../../models/resource';
import { Activity } from '../../../models/activity';
import { Functionality } from '../../../models/functionality';
import { Task } from '../../../models/task';
import { ResourcesComponent } from '../resources.component';


@Component({
  selector: 'app-register-resources',
  templateUrl: './register-resources.component.html',
  styleUrls: ['./register-resources.component.css']
})
export class RegisterResourcesComponent implements OnInit {

  resource: Resource = {
    resourceName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  activity: Activity = {
    activityName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  functionality: Functionality = {
    functionalityName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  task: Task = {
    taskName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  recurso: FormGroup;
  actividad: FormGroup;
  funcionalidad: FormGroup;
  tarea: FormGroup;

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

  createFormGroupT() {
    return new FormGroup({
      namet: new FormControl('', [Validators.required]),
      descripciont: new FormControl('', [Validators.maxLength(500)]),
      proyectot: new FormControl('', [Validators.required]),
      responsablet: new FormControl('', [Validators.required]),
      estadot: new FormControl('', [Validators.required]),
      prioridadt: new FormControl('', [Validators.required])
    });
  }

  // tslint:disable-next-line:max-line-length
  constructor(private projectsService: ProjectsService, private resourcesService: ResourcesService, private activitiesService: ActivitiesService, private functionalitiesService: FunctionalitiesService, private tasksService: TasksService, private resourcesComponent: ResourcesComponent ) {
    this.recurso = this.createFormGroupR();
    this.actividad = this.createFormGroupA();
    this.funcionalidad = this.createFormGroupF();
    this.tarea = this.createFormGroupT();
  }

  ngOnInit() {
    this.getProjects();
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
    this.recurso.reset();
  }

  onFormR() {
    this.resource.resourceName = this.recurso.get('namer').value;
    this.resource.description = this.recurso.get('descripcionr').value;
    this.resource.idProject = this.recurso.get('proyector').value;
    this.resource.responsable = this.recurso.get('responsabler').value;
    this.resource.stateType = this.recurso.get('estador').value;
    this.resource.priority = this.recurso.get('prioridadr').value;
  }

  onSaveFormR() {
    if (this.recurso.valid) {
      this.onFormR();
      this.resourcesService.saveResource(this.resource).subscribe(
        res => {
          console.log(res);
          this.resourcesComponent.getResources();
          alert('Recurso Registrado');
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormR();
    } else {
      console.log('Not Valid');
    }
  }

  onResetFormA() {
    this.actividad.reset();
  }

  onFormA() {
    this.activity.activityName = this.actividad.get('namea').value;
    this.activity.description = this.actividad.get('descripciona').value;
    this.activity.idProject = this.actividad.get('proyectoa').value;
    this.activity.responsable = this.actividad.get('responsablea').value;
    this.activity.stateType = this.actividad.get('estadoa').value;
    this.activity.priority = this.actividad.get('prioridada').value;
  }

  onSaveFormA() {
    if (this.actividad.valid) {
      this.onFormA();
      this.activitiesService.saveActivity(this.activity).subscribe(
        res => {
          console.log(res);
          this.resourcesComponent.getActivities();
          alert('Actividad Registrada');
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormA();
    } else {
      console.log('Not Valid');
    }
  }

  onResetFormF() {
    this.funcionalidad.reset();
  }

  onFormF() {
    this.functionality.functionalityName = this.funcionalidad.get('namef').value;
    this.functionality.description = this.funcionalidad.get('descripcionf').value;
    this.functionality.idProject = this.funcionalidad.get('proyectof').value;
    this.functionality.responsable = this.funcionalidad.get('responsablef').value;
    this.functionality.stateType = this.funcionalidad.get('estadof').value;
    this.functionality.priority = this.funcionalidad.get('prioridadf').value;
  }

  onSaveFormF() {
    if (this.funcionalidad.valid) {
      this.onFormF();
      this.functionalitiesService.saveFunctionality(this.functionality).subscribe(
        res => {
          console.log(res);
          this.resourcesComponent.getFunctionalities();
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

  onResetFormT() {
    this.tarea.reset();
  }

  onFormT() {
    this.task.taskName = this.tarea.get('namet').value;
    this.task.description = this.tarea.get('descripciont').value;
    this.task.idProject = this.tarea.get('proyectot').value;
    this.task.responsable = this.tarea.get('responsablet').value;
    this.task.stateType = this.tarea.get('estadot').value;
    this.task.priority = this.tarea.get('prioridadt').value;
  }

  onSaveFormT() {
    if (this.tarea.valid) {
      this.onFormT();
      this.tasksService.saveTask(this.task).subscribe(
        res => {
          console.log(res);
          this.resourcesComponent.getTasks();
          alert('Tarea Registrada');
        },
        err => console.log(err)
      );
      console.log('Valid');
      this.onResetFormT();
    } else {
      console.log('Not Valid');
    }
  }

  get namer() {
    return this.recurso.get('namer');
  }

  get namea() {
    return this.actividad.get('namea');
  }

  get namef() {
    return this.funcionalidad.get('namef');
  }

  get namet() {
    return this.tarea.get('namet');
  }

  get descripcionr() {
    return this.recurso.get('descripcionr');
  }

  get descripciona() {
    return this.actividad.get('descripciona');
  }

  get descripcionf() {
    return this.funcionalidad.get('descripcionf');
  }

  get descripciont() {
    return this.tarea.get('descripciont');
  }

  get proyector() {
    return this.recurso.get('proyector');
  }

  get proyectoa() {
    return this.actividad.get('proyectoa');
  }

  get proyectof() {
    return this.funcionalidad.get('proyectof');
  }

  get proyectot() {
    return this.tarea.get('proyectot');
  }

  get responsabler() {
    return this.recurso.get('responsabler');
  }

  get responsablea() {
    return this.actividad.get('responsablea');
  }

  get responsablef() {
    return this.funcionalidad.get('responsablef');
  }

  get responsablet() {
    return this.tarea.get('responsablet');
  }

  get estador() {
    return this.recurso.get('estador');
  }

  get estadoa() {
    return this.actividad.get('estadoa');
  }

  get estadof() {
    return this.funcionalidad.get('estadof');
  }

  get estadot() {
    return this.tarea.get('estadot');
  }

  get prioridadr() {
    return this.recurso.get('prioridadr');
  }

  get prioridada() {
    return this.actividad.get('prioridada');
  }

  get prioridadf() {
    return this.funcionalidad.get('prioridadf');
  }

  get prioridadt() {
    return this.tarea.get('prioridadt');
  }

  get dependenciar() {
    return this.recurso.get('dependenciar');
  }

  get dependenciaa() {
    return this.actividad.get('dependenciaa');
  }

  get dependenciaf() {
    return this.funcionalidad.get('dependenciaf');
  }

  get dependenciat() {
    return this.tarea.get('dependenciat');
  }

  get dater() {
    return this.recurso.get('dater');
  }

  get datea() {
    return this.actividad.get('datea');
  }

  get datef() {
    return this.funcionalidad.get('datef');
  }

  get datet() {
    return this.tarea.get('datet');
  }

}
