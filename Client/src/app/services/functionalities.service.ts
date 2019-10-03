import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Functionality } from '../models/functionality';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.identidad = usersService.getIdentidad();
    this.token = usersService.getToken();
  }

  getFunctionalities() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-functionalities`, {headers});
  }

  getFunctionality(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.get(`${this.API_URI}/list-functionalities/${id}`, {headers});
  }

  deleteFunctionality(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.delete(`${this.API_URI}/delete-functionality/${id}`, {headers});
  }

  saveFunctionality(funcionality: Functionality): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.post(`${this.API_URI}/save-functionality`, funcionality, {headers});
  }

  updateFunctionality(id: string, updateFunctionality: Functionality): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.token});
    return this.http.put(`${this.API_URI}/update-functionality/${id}`, updateFunctionality, {headers});
  }
}
