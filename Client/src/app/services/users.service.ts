import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URI}/list-users`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URI}/list-users/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/delete-user/${id}`);
  }

  saveUser(user: User): Observable<User> {
    return this.http.post(`${this.API_URI}/save-user`, user);
  }

  updateUser(id: string, updateUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/update-user/${id}`, updateUser);
  }

  signUp(user: User, gettoken = null): Observable<any> {
    return this.http.post(`${this.API_URI}/login`, user);
  }
}
