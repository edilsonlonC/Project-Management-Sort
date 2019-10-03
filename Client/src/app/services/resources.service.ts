import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from '../models/resource';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.identidad = usersService.getIdentidad();
    this.token = usersService.getToken();
  }

  getResources() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-resources`, {headers});
  }

  getResource(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-resource/${id}`, {headers});
  }

  deleteResource(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.delete(`${this.API_URI}/delete-resource/${id}`, {headers});
  }

  saveResource(resource: Resource): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.post(`${this.API_URI}/save-resource`, resource, {headers});
  }

  updateResource(id: string, updateResource: Resource): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.put(`${this.API_URI}/update-resource/${id}`, updateResource, {headers});
  }
}
