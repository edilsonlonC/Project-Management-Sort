import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dfs } from '../models/dfs';

@Injectable({
  providedIn: 'root'
})
export class CocomollService {

  API_URI = 'http://localhost:3004/datos';

  constructor(private http: HttpClient) { }

  getJSONs() {
     return this.http.get(`${this.API_URI}`);
   }

  getJSON(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  updateJSON(id: string, updateDatos: Dfs) {
    return this.http.put(`${this.API_URI}/${id}`, updateDatos);
  }
}
