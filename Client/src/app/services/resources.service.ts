import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../models/resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {

   }

  getResources() {
    return this.http.get(`${this.API_URI}/list-resources`);
  }

  getResource(id: string) {
    return this.http.get(`${this.API_URI}/list-resource/${id}`);
  }

  deleteResource(id: string) {
    return this.http.delete(`${this.API_URI}/delete-resource/${id}`);
  }

  saveResource(resource: Resource): Observable<any> {
    return this.http.post(`${this.API_URI}/save-resource`, resource);
  }

  updateResource(id: string, updateResource: Resource): Observable<any> {
    return this.http.put(`${this.API_URI}/update-resource/${id}`, updateResource);
  }
}
