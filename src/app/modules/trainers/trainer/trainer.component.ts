import { HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainersService } from 'src/app/services/trainers.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  public name:string ="";
  public varsta = 0;
  public email="";
  public telefon = "";
  public sub:Subscription=this.route.params.subscribe();
  public id: number =0;
  public trainer:Object|null;

  constructor(private trainerService:TrainersService, private route:ActivatedRoute) {
      this.trainer=null;
   }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params =>{
      //this.name= params['name'];
      this.id = params['id'];
      
      /*
      if(this.name === 'string')
      {
        console.log("nume");
        this.gettrainer(this.name);

      }
      */
      if(this.id)
      {
        this.getTrainerId(this.id);
      }
    });
  }
  public getTrainer(name:string):void
  {
    
    this.trainerService.GetTrainerByName(name).subscribe((result)=>
    {
      this.trainer = result;
      console.log(result);
    },
    (error)=>
    {
      console.log("Nu exista acest trainer");
    });
  }

  public getTrainerId(id: Number):void
  {
    this.trainerService.GetTrainerById(id).subscribe((result)=>
    {
      this.name = result.nume;
      this.id = result.id;
      this.telefon = result.telefon;
      this.email = result.email;
      console.log(result);
      this.trainer = result;
    },
    (error)=>
    {
      console.log("Nu exista acest trainer");
    });
  }

}
