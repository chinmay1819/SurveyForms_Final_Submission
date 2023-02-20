import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  http: any;

  constructor(private http: HttpClient) { }
  getResponse(){
// this.http.get('');
return this.http.get()
  } 
}
