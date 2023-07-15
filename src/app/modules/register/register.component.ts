import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from '../entities/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: Register = new Register();
  confirmPass = "";
  terms: boolean = false;
  public key = localStorage.getItem('key');
  constructor(private registerService: RegisterService,private router:Router) { }

  ngOnInit(): void {}
  register() {
    if (!this.validEmail())
      alert("Email in wrong format")
    else if (!this.validPassword())
      alert("Passwords don't match")
    else if(this.user.name.length>0)
    {
      this.registerService.register(this.user).subscribe(resp => {
        this.router.navigate(["../"])
      }, error => {
        alert(error.error)
      })
    }
  }
  validEmail(): boolean {
    if (String(this.user.email)
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )) {
      return true;
    }
    return false
  }
  validPassword(): boolean {
    return this.user.password == this.confirmPass
  }
  check(val: any): boolean {
    return val == null ? true : false;
  }

}
