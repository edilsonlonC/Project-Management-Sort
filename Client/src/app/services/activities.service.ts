import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.identidad = usersService.getIdentidad();
    this.token = usersService.getToken();
  }

  getActivities() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-activities`, {headers});
  }

  getActivity(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-activities/${id}`, {headers});
  }

  deleteActivity(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.delete(`${this.API_URI}/delete-activity/${id}`, {headers});
  }

  saveActivity(resource: Activity): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.post(`${this.API_URI}/save-activity`, resource, {headers});
  }

  updateActivity(id: string, updateActivity: Activity): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.put(`${this.API_URI}/update-activity/${id}`, updateActivity, {headers});
  }
}
