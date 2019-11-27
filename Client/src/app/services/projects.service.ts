import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.identidad = usersService.getIdentidad();
    this.token = usersService.getToken();
   }

  getProjects() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-projects`, {headers});
  }

  getProject(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-project/${id}`, {headers});
  }

  deleteProject(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.delete(`${this.API_URI}/delete-project/${id}`, {headers});
  }

  saveProject(project: Project): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.post(`${this.API_URI}/save-project/${this.identidad.id_usuarios}`, project, {headers});
  }

  updateProject(id: string, updateProject: Project): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.put(`${this.API_URI}/update-project/${id}`, updateProject, {headers});
  }
}
