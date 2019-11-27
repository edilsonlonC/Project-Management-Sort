import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';
  identidad: any;
  token: string;

  constructor(private http: HttpClient) { }
  tokens = localStorage.getItem('token');

  getUsers() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.tokens});
    return this.http.get(`${this.API_URI}/list-users`, {headers});
  }

  getUser(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.tokens});
    return this.http.get(`${this.API_URI}/list-users/${id}`, {headers});
  }

  deleteUser(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.tokens});
    return this.http.delete(`${this.API_URI}/delete-user/${id}`, {headers});
  }

  saveUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.tokens});
    return this.http.post(`${this.API_URI}/save-user`, user, {headers});
  }

  updateUser(id: string, updateUser: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', authorization: 'Bearer' + ' ' + this.tokens});
    return this.http.put(`${this.API_URI}/update-user/${id}`, updateUser, {headers});
  }

  signUp(user: User, gettoken = null): Observable<any> {
    return this.http.post(`${this.API_URI}/login`, user);
  }

  getIdentidad() {
    const identidad = JSON.parse(localStorage.getItem('identidad'));
    if (identidad && identidad != null && identidad !== undefined && identidad !== 'udenfined') {
        this.identidad = identidad;
    } else {
        this.identidad = null;
    }
    return this.identidad;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token && token != null && token !== undefined && token !== 'udenfined') {
        this.token = token;
    } else {
        this.token = null;
    }
    return this.token;
  }
}
