import { HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AntrenoriService } from 'src/app/services/antrenori.service';


@Component({
  selector: 'app-antrenor',
  templateUrl: './antrenor.component.html',
  styleUrls: ['./antrenor.component.scss']
})
export class AntrenorComponent implements OnInit {

  public name:string ="";
  public varsta = 0;
  public email="";
  public telefon = "";
  public sub:Subscription=this.route.params.subscribe();
  public id: number =0;
  public antrenor:Object|null;

  constructor(private antrenorService:AntrenoriService, private route:ActivatedRoute) {
      this.antrenor=null;
   }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params =>{
      //this.name= params['name'];
      this.id = params['id'];
      
      /*
      if(this.name === 'string')
      {
        console.log("nume");
        this.getAntrenor(this.name);

      }
      */
      if(this.id)
      {
        this.getAntrenorId(this.id);
      }
    });
  }
  public getAntrenor(name:string):void
  {
    
    this.antrenorService.GetAntrenorByName(name).subscribe((result)=>
    {
      this.antrenor = result;
      console.log(result);
    },
    (error)=>
    {
      console.log("Nu exista acest antrenor");
    });
  }

  public getAntrenorId(id: Number):void
  {
    this.antrenorService.GetAntrenorById(id).subscribe((result)=>
    {
      this.name = result.nume;
      this.id = result.id;
      this.telefon = result.telefon;
      this.email = result.email;
      console.log(result);
      this.antrenor = result;
    },
    (error)=>
    {
      console.log("Nu exista acest antrenor");
    });
  }

}
