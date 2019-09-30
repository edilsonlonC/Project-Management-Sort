import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;

  constructor(private http: HttpClient, private usersService: UsersService ) {
    this.identidad = usersService.getIdentidad();
   }

  getProjects() {
    return this.http.get(`${this.API_URI}/list-projects`);
  }

  getProject(id: string) {
    return this.http.get(`${this.API_URI}/list-project/${id}`);
  }

  deleteProject(id: string) {
    return this.http.delete(`${this.API_URI}/delete-project/${id}`);
  }

  saveProject(project: Project): Observable<any> {
    return this.http.post(`${this.API_URI}/save-project/${this.identidad.id_usuarios}`, project);
  }

  updateProject(id: string, updateProject: Project): Observable<any> {
    return this.http.put(`${this.API_URI}/update-project/${id}`, updateProject);
  }
}
