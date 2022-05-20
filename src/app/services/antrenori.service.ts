import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntrenoriService { 
  public url ='https://localhost:44306/api/Antrenor';

  constructor(
    public http:HttpClient,
  ) { }

  public getAllAntrenori():Observable<any>
  {
    return this.http.get(this.url);
  }

  public GetAntrenorByName(name:string):Observable<any>
  {
    return this.http.get(`${this.url}/${name}`);
  }

  public GetAntrenorById(id:Number):Observable<any>
  {
    return this.http.get(`${this.url}/byId/${id}`);
  }
  public deleteAntrenor(id:Number): Observable<any>
  {
    
    const httpOptions = {
      headers: new HttpHeaders()
      .set("Access-Control-Allow-Origin",'http://localhost:4200'),
    }
    /*
    return this.http.delete<any>(this.url, httpOptions);
    */
   return this.http.delete<any>(`${this.url}/${id}`,httpOptions)
  }

  public createAntrenor(antrenor:object): Observable<any>
  {
      /* const httpOptions = {
          headers: new HttpHeaders()
            .set('Content-Type','application/json'),
          body: antrenor
       }*/
     this.http.post(`${this.url}/fromBody`,antrenor);
     return this.getAllAntrenori();
  }

  public deleteAnt(antrenor:object): Observable<any>
  {
    const httpOptions = {
         headers: new HttpHeaders()
        .set('Content-Type','application/json').set('Access-Control-Allow-Origin', 'http://localhost:4200'),
         body: antrenor
       };
    return this.http.delete<any>(this.url,httpOptions);
    
  }

  public updateAntrenor(antrenor:object): Observable<any>
  {
    return this.http.put(this.url,antrenor);
  }
}
