import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Functionality } from '../models/functionality';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getFunctionalities() {
    return this.http.get(`${this.API_URI}/list-functionalities`);
  }

  getFunctionality(id: string) {
    return this.http.get(`${this.API_URI}/list-functionalities/${id}`);
  }

  deleteFunctionality(id: string) {
    return this.http.delete(`${this.API_URI}/delete-functionality/${id}`);
  }

  saveFunctionality(funcionality: Functionality): Observable<any> {
    return this.http.post(`${this.API_URI}/save-functionality`, funcionality);
  }

  updateFunctionality(id: string, updateFunctionality: Functionality): Observable<any> {
    return this.http.put(`${this.API_URI}/update-functionality/${id}`, updateFunctionality);
  }
}
