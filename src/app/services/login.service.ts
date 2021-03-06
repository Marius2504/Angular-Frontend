import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url ='https://localhost:44306/api/Account/login';
  constructor(public http:HttpClient) {
    
   }
  public login(cont:object):Observable<any>
  {
    return this.http.post(`${this.url}`,cont);
  }

}
