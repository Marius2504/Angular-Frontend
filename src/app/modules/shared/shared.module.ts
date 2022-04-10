import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEditAntrenorComponent } from './dialog-edit-antrenor/dialog-edit-antrenor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DialogEditAntrenorComponent
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
