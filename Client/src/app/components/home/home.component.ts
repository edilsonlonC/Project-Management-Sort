import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identidad: any;
  token: string;
  user: any;
  project: any;
  resource: any;
  activity: any;
  functionality: any;
  task: any;

  constructor(private usersService: UsersService, private router: Router, private authGuard: AuthGuard) {
    this.identidad = this.usersService.getIdentidad();
    this.token = this.usersService.getToken();
    this.authGuard.canActivate();
   }

  ngOnInit() {}

  logOut() {
    localStorage.clear();
    this.identidad = null;
    this.token = null;
    this.router.navigate(['/']);
  }

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setProject(project: any) {
    this.project = project;
  }

  getProject() {
    return this.project;
  }

  setResource(resource: any) {
    this.resource = resource;
  }

  getResource() {
    return this.resource;
  }

  setActivity(activity: any) {
    this.activity = activity;
  }

  getActivity() {
    return this.activity;
  }

  setFunctionality(functionality: any) {
    this.functionality = functionality;
  }

  getFunctionality() {
    return this.functionality;
  }

  setTask(task: any) {
    this.task = task;
  }

  getTask() {
    return this.task;
  }

}
