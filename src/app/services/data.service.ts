import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default Message');
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  public changeMessage(message: string)
  {
    this.messageSource.next(message);
  }
}
