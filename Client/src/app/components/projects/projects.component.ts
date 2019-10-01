import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = {};
  id: any;
  constructor(private projectsService: ProjectsService, private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      res => {
        this.projects = res;
      },
      err => console.log(err)
    );
  }

  deleteProject(id: string) {
    this.projectsService.deleteProject(id).subscribe(
      res => {
        console.log(res);
        this.getProjects();
      },
      err => console.log(err)
    );
  }

  updateProject(project: any) {
    this.homeComponent.setProject(project);
  }

  setId(id: any) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
