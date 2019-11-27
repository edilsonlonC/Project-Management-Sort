import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PuntosCasosUsos } from 'src/app/models/pcu';

@Injectable({
  providedIn: 'root'
})
export class CasosDeUsoService {

  API_URI = 'http://localhost:3000/api/estimate';

  constructor(private http: HttpClient) { }

  saveEstimate(estimacion: PuntosCasosUsos): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.API_URI}/use/case`, estimacion, {headers});
  }

}
