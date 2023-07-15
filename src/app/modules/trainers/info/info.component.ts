import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { TrainersService } from 'src/app/services/trainers.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogEditTrainerComponent } from 'src/app/modules/shared/dialog-edit/dialog-edit-trainer.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public message: string;
  public messageOut='Mesaj initial';
  public currentMessage = "Mesaj transmis din parent component";
  public trainers: [] = [];
  public displayedColumns=["id","nume","varsta","telefon","email","optiuni","edit","delete","profil"];

  constructor(
    private router: Router,
    private dataService: DataService,
    private trainersService: TrainersService,
    private dialog: MatDialog
  ) {
    this.message = '';
    this.subscription = this.dataService.currentMessage.subscribe((message) => this.message = message);
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe((message) => this.message = message);
    this.getTrainers();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public getTrainers(): void {
    this.trainersService.getAllTrainers().subscribe((result)=>{
      console.log(result);
      this.trainers = result;
    },
    (error)=>
    {
      console.log(error);
    });
  }

  public logout(): void {
    this.dataService.changeMessage('hello from trainer');
    localStorage.setItem('role', 'anonim');
    this.router.navigate(['/login']);
  }

  public addTrainer():void{
    this.editTrainer();
  }

  public editTrainer(trainer?:object):void{
    const obj = {
      trainer
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='550px';
    dialogConfig.height='750px';
    dialogConfig.data = obj;
    const dialog=this.dialog.open(DialogEditTrainerComponent, dialogConfig);
    dialog.afterClosed().subscribe((result)=>{
      this.trainers = result;
      window.location.reload();
    },
    (error)=>
    {
      console.log(error);
    });
    
  }

  public deleteTrainer(id:Number):void{
    this.trainersService.deleteTrainer(id).subscribe((result)=>{
      this.trainers=result;
    },
    (error)=>
    {
      console.log(error);
    });
  }
  public deleteAnt(trainer : object):void{
    this.trainersService.deleteAnt(trainer).subscribe((result)=>{
      this.trainers = result;
    },
    (error) =>{
      console.log(error);
    })
    window.location.reload();
  }

  

  public profilTrainer(id:number):void{
    this.router.navigate(['/trainer',id]);
  }
  public addNewItem(value:any)
  {
    if(typeof(value) == 'string')
      this.messageOut = value;
    else
      console.log(value);
  }

}
