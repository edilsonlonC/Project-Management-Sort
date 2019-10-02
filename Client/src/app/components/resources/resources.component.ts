import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../services/resources.service';
import { ActivitiesService } from '../../services/activities.service';
import { FunctionalitiesService } from '../../services/functionalities.service';
import { TasksService } from '../../services/tasks.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: any = {};
  activities: any = {};
  functionalities: any = {};
  tasks: any = {};

  id: any;
  bandera: any;

  // tslint:disable-next-line:max-line-length
  constructor(private resourcesService: ResourcesService, private activitiesService: ActivitiesService, private functionalitiesService: FunctionalitiesService, private tasksService: TasksService, private homeComponent: HomeComponent  ) { }

  ngOnInit() {
    this.getResources();
    this.getActivities();
    this.getFunctionalities();
    this.getTasks();
  }

  getResources() {
    this.resourcesService.getResources().subscribe(
      res => {
        this.resources = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  getActivities() {
    this.activitiesService.getActivities().subscribe(
      res => {
        this.activities = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  getFunctionalities() {
    this.functionalitiesService.getFunctionalities().subscribe(
      res => {
        this.functionalities = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  getTasks() {
    this.tasksService.getTasks().subscribe(
      res => {
        this.tasks = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteResources() {
    switch (this.bandera) {
      case 'r': this.resourcesService.deleteResource(this.id).subscribe(
          res => {
            console.log(res);
            this.getResources();
          },
          err => console.log(err)
        );
                break;
      case 'a': this.activitiesService.deleteActivity(this.id).subscribe(
          res => {
            console.log(res);
            this.getActivities();
          },
          err => console.log(err)
        );
                break;
      case 'f': this.functionalitiesService.deleteFunctionality(this.id).subscribe(
          res => {
            console.log(res);
            this.getFunctionalities();
          },
          err => console.log(err)
        );
                break;
      default: this.tasksService.deleteTask(this.id).subscribe(
          res => {
            console.log(res);
            this.getTasks();
          },
          err => console.log(err)
        );
               break;
      }
  }

  setIdR(id: any, bandera: any) {
    this.id = id;
    this.bandera = bandera;
    console.log(this.id, this.bandera);
  }

  setIdA(id: any, bandera: any) {
    this.id = id;
    this.bandera = bandera;
    console.log(this.id, this.bandera);
  }

  setIdF(id: any, bandera: any) {
    this.id = id;
    this.bandera = bandera;
    console.log(this.id, this.bandera);
  }

  setIdT(id: any, bandera: any) {
    this.id = id;
    this.bandera = bandera;
    console.log(this.id, this.bandera);
  }

  updateResource(resource: any) {
    this.homeComponent.setResource(resource);
  }

  updateActivity(activity: any) {
    this.homeComponent.setActivity(activity);
  }

  updateFunctionality(functionality: any) {
    console.log();
    this.homeComponent.setFunctionality(functionality);
  }

  updateTask(task: any) {
    this.homeComponent.setTask(task);
  }

}
