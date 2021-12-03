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


  getAll(linkUrl: string): Observable<structGeral[]> {
    return this.http.get<structGeral[]>(linkUrl, this.httpOptions)
  }

  get(id: number, linkUrl: string): Observable<structGeral> {
    let url = `${linkUrl}/${id}`;
    return this.http.get<structGeral>(url)
  }

  create(geral: any, linkUrl: string): Observable<structGeral> {
    return this.http.post<structGeral>(linkUrl, geral, this.httpOptions)
  }

  delete(item: any | number, linkUrl: string): Observable<structGeral> {
    const id = typeof item == 'number' ? item : item.id
    const url = `${linkUrl}/${id}`;
    return this.http.delete<structGeral>(url, this.httpOptions)
  }
  // edit(item: structGeral | number) {
  //   const id = typeof item == 'number' ? item : item.id
  // }

  update(item: any, linkUrl: string): Observable<any> {
    const url = `${linkUrl}/${item.id}`;
    return this.http.put<structGeral>(url, item, this.httpOptions);
  }


}
