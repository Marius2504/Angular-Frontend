import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { Login } from '../../entities/login';


//import { ChildComponent } from 'src/app/modules/traineri/child/child.component';
//<app-child [message]="parentMessage"()></app-child>

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  user:Login = new Login();

  public subscription: Subscription;
  public message:string;
  public parentMessage:string;
  public key = localStorage.getItem('key');

  constructor(
    private router:Router,
    private dataService:DataService,
    private loginService:LoginService
  ) 
  {
    this.message='';
    this.parentMessage='';
    this.subscription=this.dataService.currentMessage.subscribe((message)=>this.message = message);

  }

  ngOnInit() {
    this.subscription = this.dataService.currentMessage.subscribe((message)=>this.message = message);
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public login():void
  {
    this.loginService.login(this.user).subscribe((result)=>{
      localStorage.setItem('key',JSON.stringify(result));
      this.router.navigate(['../trainers']);
    },
    (error)=>{
      alert(error.error);
    });
  }
  
  check(val:any):boolean
  {
    return val == null ? true:false;
  }

}
