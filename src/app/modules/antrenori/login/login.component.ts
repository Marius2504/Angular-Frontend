import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
//import { ChildComponent } from 'src/app/modules/antrenori/child/child.component';
//<app-child [message]="parentMessage"()></app-child>

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  public subscription: Subscription;
  public message:string;
  public parentMessage:string;

  constructor(
    private router:Router,
    private dataService:DataService,
  ) 
  { 
    this.message='';
    this.parentMessage='';
    this.subscription=this.dataService.currentMessage.subscribe((message)=>this.message = message);

  }

  ngOnInit() {
    console.log("IN LOGIN");
    this.subscription = this.dataService.currentMessage.subscribe((message)=>this.message = message);
    console.log(this.message);
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public login():void
  {
    this.dataService.changeMessage('hello from login')
    localStorage.setItem('role','admin');
    this.router.navigate(['/antrenor']);
  }
  public receiveMessage(event: any):void
  {
    console.log(event);
  }

}
