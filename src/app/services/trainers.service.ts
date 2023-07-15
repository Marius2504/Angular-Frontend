import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Trainer } from '../modules/entities/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainersService { 
  public url ='https://localhost:44306/api/Trainer';
  
  constructor(
    public http:HttpClient,
  ) { }
  

  public getAllTrainers():Observable<any>
  {
    return this.http.get(this.url);
  }

  public GetTrainerByName(name:string):Observable<any>
  {
    return this.http.get(`${this.url}/${name}`);
  }

  public GetTrainerById(id:Number):Observable<any>
  {
    return this.http.get(`${this.url}/byId/${id}`);
  }
  public deleteTrainer(id:Number): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders()
      .set("Access-Control-Allow-Origin",'http://localhost:4200'),
    }
   return this.http.delete<any>(`${this.url}/${id}`,httpOptions)
  }

  public createTrainer(trainer:object): Observable<any>
  {
     this.http.post(`${this.url}/fromBody`,trainer);
     return this.getAllTrainers();
  }

  public deleteAnt(trainer:object): Observable<any>
  {
    const httpOptions = {
         headers: new HttpHeaders()
        .set('Content-Type','application/json').set('Access-Control-Allow-Origin', 'http://localhost:4200'),
         body: trainer
       };
    return this.http.delete<any>(this.url,httpOptions);
    
  }

  public updateTrainer(trainer:Trainer): Observable<any>
  {
    return this.http.put(this.url,trainer);
  }
  
}
