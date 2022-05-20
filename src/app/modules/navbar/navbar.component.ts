import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  test=0;
  constructor(private router:Router) { }

  key = localStorage.getItem('key');
  login(event:Event)
  {
    this.router.navigate(['/login']);
  }
  logout(event:Event)
  {
      localStorage.clear();
      window.location.reload();
      this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }
  check(val:any):boolean
  {
    if(val == null)
        return true;
    return false;
  }

}
