import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEditTrainerComponent } from './dialog-edit/dialog-edit-trainer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DialogEditTrainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  
  ]
})
export class SharedModule { }
