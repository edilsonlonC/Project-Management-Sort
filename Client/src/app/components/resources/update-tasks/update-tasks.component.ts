import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../models/task';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {

  task: Task = {
    taskName: '',
    description: '',
    responsable: '',
    stateType: 0,
    priority: 0,
    idProject: 0
  };

  actualizar: FormGroup;
  getTask: any = {};
  projects: any = {};

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
  constructor(private projectsService: ProjectsService, private tasksService: TasksService, private homeComponent: HomeComponent, private router: Router) {
    this.actualizar = this.createFormGroupT();
    this.getTask = this.homeComponent.getTask();
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

  onResetFormT() {
    this.actualizar.reset();
  }

  onActualizar() {
    this.actualizar.get('namet').setValue(this.getTask.nombre_tarea);
    this.actualizar.get('descripciont').setValue(this.getTask.descripcion);
    this.actualizar.get('proyectot').setValue(this.getTask.Proyecto_id_proyecto);
    this.actualizar.get('responsablet').setValue(this.getTask.responsable);
    this.actualizar.get('estadot').setValue(this.getTask.Tipo_estado_id_estado);
    this.actualizar.get('prioridadt').setValue(this.getTask.Prioridad_id_prioridad);
  }

  onFormT() {
    this.task.taskName = this.actualizar.get('namet').value;
    this.task.description = this.actualizar.get('descripciont').value;
    this.task.idProject = this.actualizar.get('proyectot').value;
    this.task.responsable = this.actualizar.get('responsablet').value;
    this.task.stateType = this.actualizar.get('estadot').value;
    this.task.priority = this.actualizar.get('prioridadt').value;
  }

  onUpdateFormT() {
    if (this.actualizar.valid) {
      this.onFormT();
      this.tasksService.updateTask(this.getTask.id_tareas, this.task).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home/resources']);
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

  get namet() {
    return this.actualizar.get('namet');
  }

  get descripciont() {
    return this.actualizar.get('descripciont');
  }

  get proyectot() {
    return this.actualizar.get('proyectot');
  }

  get responsablet() {
    return this.actualizar.get('responsablet');
  }

  get estadot() {
    return this.actualizar.get('estadot');
  }

  get prioridadt() {
    return this.actualizar.get('prioridadt');
  }

  get datet() {
    return this.actualizar.get('datet');
  }
}
