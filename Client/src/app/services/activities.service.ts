import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getActivities() {
    return this.http.get(`${this.API_URI}/list-activities`);
  }

  getActivity(id: string) {
    return this.http.get(`${this.API_URI}/list-activities/${id}`);
  }

  deleteActivity(id: string) {
    return this.http.delete(`${this.API_URI}/delete-activity/${id}`);
  }

  saveActivity(resource: Activity): Observable<any> {
    return this.http.post(`${this.API_URI}/save-activity`, resource);
  }

  updateActivity(id: string, updateActivity: Activity): Observable<any> {
    return this.http.put(`${this.API_URI}/update-activity/${id}`, updateActivity);
  }
}
