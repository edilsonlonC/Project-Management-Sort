import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.identidad = usersService.getIdentidad();
    this.token = usersService.getToken();
  }

  getTasks() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-tasks`, {headers});
  }

  getTask(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-tasks/${id}`, {headers});
  }

  deleteTask(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.delete(`${this.API_URI}/delete-task/${id}`, {headers});
  }

  saveTask(task: Task): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.post(`${this.API_URI}/save-task`, task, {headers});
  }

  updateTask(id: string, updateTask: Task): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.put(`${this.API_URI}/update-task/${id}`, updateTask, {headers});
  }
}
