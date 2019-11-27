import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dfs } from '../models/dfs';
import { Estimacion } from '../models/estimacion';

@Injectable({
  providedIn: 'root'
})
export class CocomollService {

  API_URI = 'http://localhost:3004/datos';
  URI = 'http://localhost:3000/api/estimate';

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

  saveEstimateDI(est0: Estimacion): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.URI}/initial/model`, est0, {headers});
  }

  saveEstimateAP(est1: Estimacion): Observable<any> {
    return this.http.post(`${this.URI}/post/architecture`, est1);
  }
}
