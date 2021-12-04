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

  get(id: number): Observable<structGeral> {
    let url = `${this.geralUrl}/${id}`;
    return this.http.get<structGeral>(url)
  }

  create(geral: structGeral): Observable<structGeral> {
    return this.http.post<structGeral>(this.geralUrl, geral, this.httpOptions)
  }

  delete(item: structGeral | number): Observable<structGeral> {
    const id = typeof item == 'number' ? item : item.id
    const url = `${this.geralUrl}/${id}`;
    return this.http.delete<structGeral>(url, this.httpOptions)
  }
  // edit(item: structGeral | number) {
  //   const id = typeof item == 'number' ? item : item.id
  // }

  update(item: structGeral): Observable<any> {
    const url = `${this.geralUrl}/${item.id}`;
    return this.http.put<structGeral>(url, item, this.httpOptions);
  }


}
