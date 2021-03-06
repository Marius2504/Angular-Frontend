import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


//import { ChildComponent } from 'src/app/modules/antrenori/child/child.component';
//<app-child [message]="parentMessage"()></app-child>

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
});

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
    console.log(this.message);
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public login():void
  {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe((result)=>{
      localStorage.setItem('key',JSON.stringify(result));
      this.router.navigate(['/antrenori']);
    },
    (error)=>{
      console.log(error);
    });
    //window.location.reload();
  }
  public receiveMessage(event: any):void
  {
    console.log(event);
  }
  get name(): AbstractControl{
    return this.loginForm.get('name') as FormGroup;
  }
  get age(): AbstractControl{
    return this.loginForm.get('age') as FormGroup;
  }
  get phone(): AbstractControl{
    return this.loginForm.get('phone') as FormGroup;
  }
  get email(): AbstractControl{
    return this.loginForm.get('email') as FormGroup;
  }
  check(val:any):boolean
  {
    if(val == null)
        return true;
    return false;
  }

}
