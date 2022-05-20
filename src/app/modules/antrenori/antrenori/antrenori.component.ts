import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { AntrenoriService } from 'src/app/services/antrenori.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogEditAntrenorComponent } from 'src/app/modules/shared/dialog-edit-antrenor/dialog-edit-antrenor.component';

@Component({
  selector: 'app-antrenori',
  templateUrl: './antrenori.component.html',
  styleUrls: ['./antrenori.component.scss']
})
export class AntrenoriComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public message: string;
  public messageOut='Mesaj initial';
  public currentMessage = "Mesaj transmis din parent component";
  public antrenori: [] = [];
  public displayedColumns=["id","nume","varsta","telefon","email","optiuni","edit","delete","profil"];

  constructor(
    private router: Router,
    private dataService: DataService,
    private antrenoriService: AntrenoriService,
    private dialog: MatDialog
  ) {
    this.message = '';
    this.subscription = this.dataService.currentMessage.subscribe((message) => this.message = message);
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe((message) => this.message = message);
    this.getAntrenori();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public getAntrenori(): void {
    this.antrenoriService.getAllAntrenori().subscribe((result)=>{
      console.log(result);
      this.antrenori = result;
    },
    (error)=>
    {
      console.log(error);
    });
  }

  public logout(): void {
    this.dataService.changeMessage('hello from antrenor');
    localStorage.setItem('role', 'anonim');
    this.router.navigate(['/login']);
  }

  public addAntrenor():void{
    this.editAntrenor();
  }

  public editAntrenor(antrenor?:object):void{
    const obj = {
      antrenor
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='550px';
    dialogConfig.height='750px';
    dialogConfig.data = obj;
    const dialog=this.dialog.open(DialogEditAntrenorComponent, dialogConfig);
    dialog.afterClosed().subscribe((result)=>{
      this.antrenori = result;
      window.location.reload();
    },
    (error)=>
    {
      console.log(error);
    });
    
  }

  public deleteAntrenor(id:Number):void{
    this.antrenoriService.deleteAntrenor(id).subscribe((result)=>{
      this.antrenori=result;
    },
    (error)=>
    {
      console.log(error);
    });
  }
  public deleteAnt(antrenor : object):void{
    this.antrenoriService.deleteAnt(antrenor).subscribe((result)=>{
      this.antrenori = result;
    },
    (error) =>{
      console.log(error);
    })
    window.location.reload();
  }

  

  public profilAntrenor(id:number):void{
    this.router.navigate(['/antrenor',id]);
  }
  public addNewItem(value:any)
  {
    if(typeof(value) == 'string')
      this.messageOut = value;
    else
      console.log(value);
  }

}
