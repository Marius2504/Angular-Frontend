import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainersService } from 'src/app/services/trainers.service';
import { Trainer } from '../../entities/trainer';
@Component({
  selector: 'app-dialog-edit-trainer',
  templateUrl: './dialog-edit-trainer.component.html',
  styleUrls: ['./dialog-edit-trainer.component.scss']
})
export class DialogEditTrainerComponent implements OnInit {
  public trainerForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    age: new FormControl(0),
    phone: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });
  public title;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private traineriService: TrainersService,
  ) {

    if (data.trainer) {
      this.title = 'Edit trainer';
      this.trainerForm.patchValue(data.trainer);
    }
    else {
      this.title = 'Add trainer';
    }
  }
  //castez la formgroup
  get name(): AbstractControl {
    return this.trainerForm.get('name') as FormGroup;
  }
  get age(): AbstractControl {
    return this.trainerForm.get('age') as FormGroup;
  }
  get phone(): AbstractControl {
    return this.trainerForm.get('phone') as FormGroup;
  }
  get email(): AbstractControl {
    return this.trainerForm.get('email') as FormGroup;
  }

  ngOnInit(): void {
  }

  public save(): void {
    console.log("da")
    this.traineriService.createTrainer(this.trainerForm.value).subscribe((result) => {
    },
      (error) => {
        console.log(error);
      });
    window.location.reload();
  }

  public updateTrainer(): void {
    var trainer = new Trainer();
    trainer.name = this.trainerForm.value.name;
    trainer.age = this.trainerForm.value.age;
    trainer.email = this.trainerForm.value.email;
    trainer.phoneNumber = this.trainerForm.value.phone;
    trainer.id = this.data.trainer.id;
    console.log(trainer);
    this.traineriService.updateTrainer(trainer).subscribe((result) => {
      console.log(result);
    },
      (error) => {
        alert(error.error)
      });
  }

}
