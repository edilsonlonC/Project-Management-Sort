import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.API_URI}/list-tasks`);
  }

  getTask(id: string) {
    return this.http.get(`${this.API_URI}/list-tasks/${id}`);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URI}/delete-task/${id}`);
  }

  saveTask(task: Task): Observable<any> {
    return this.http.post(`${this.API_URI}/save-task`, task);
  }

  updateTask(id: string, updateTask: Task): Observable<any> {
    return this.http.put(`${this.API_URI}/update-task/${id}`, updateTask);
  }
}
