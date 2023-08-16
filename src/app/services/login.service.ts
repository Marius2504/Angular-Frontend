import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modules/entities/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url ='https://localhost:44306/api/Account/login';
  public url2 = 'http://127.0.0.1:5000'
  constructor(public http:HttpClient) {
    
   }
  public login(user:Login):Observable<any>
  {
    return this.http.post(`${this.url}`,user);
  }
  public getMessage():Observable<any>
  {
    return this.http.get(`${this.url2}`,{responseType: 'text'});
  }
  
  

}
