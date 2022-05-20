import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AntrenoriService } from 'src/app/services/antrenori.service';

@Component({
  selector: 'app-dialog-edit-antrenor',
  templateUrl: './dialog-edit-antrenor.component.html',
  styleUrls: ['./dialog-edit-antrenor.component.scss']
})
export class DialogEditAntrenorComponent implements OnInit {
  public antrenorForm: FormGroup = new FormGroup({
      id: new FormControl(0),
      varsta: new FormControl(0),
      telefon: new FormControl(''),
      nume: new FormControl(''),
      email: new FormControl(''),
  });
  public title;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private antrenoriService: AntrenoriService,
    private dialog: MatDialogRef<DialogEditAntrenorComponent>
  ) { 
    console.log(data.antrenor);
    if(data.antrenor){
      this.title = 'Edit antrenor';
      this.antrenorForm.patchValue(data.antrenor);
    }
    else
    {
      this.title = 'Add antrenor';
    }
  }
//castez la formgroup
  get name(): AbstractControl{
    return this.antrenorForm.get('name') as FormGroup;
  }
  get age(): AbstractControl{
    return this.antrenorForm.get('age') as FormGroup;
  }
  get phone(): AbstractControl{
    return this.antrenorForm.get('phone') as FormGroup;
  }
  get email(): AbstractControl{
    return this.antrenorForm.get('email') as FormGroup;
  }

  ngOnInit(): void {
  }

  public save():void
  {
    this.antrenoriService.createAntrenor(this.antrenorForm.value).subscribe((result)=>{
    },
    (error)=>{
      console.log(error);
    });
    window.location.reload();
  }

  public updateAntrenor():void
  {
      this.antrenoriService.updateAntrenor(this.antrenorForm.value).subscribe((result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      });
  }
  
}
