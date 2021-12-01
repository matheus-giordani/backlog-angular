import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { structGeral } from './shared/geral.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(public http: HttpClient) { }

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private geralUrl = 'http://localhost:3000/contrato'

  getAll(): Observable<structGeral[]> {
    return this.http.get<structGeral[]>(this.geralUrl, this.httpOptions)
  }

  create(geral: structGeral): Observable<structGeral> {
    return this.http.post<structGeral>(this.geralUrl, geral, this.httpOptions)
  }

}
