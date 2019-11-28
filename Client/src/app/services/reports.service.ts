import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getReport(id: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(`${this.API_URI}/report/${id}`, {headers});
  }

}
