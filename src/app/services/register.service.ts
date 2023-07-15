import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../modules/entities/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public url ='https://localhost:44306/api/Account/register';
  constructor(public http:HttpClient) {}

  public register(user:Register):Observable<any>
  {
    return this.http.post(`${this.url}`,user);
  }
}
