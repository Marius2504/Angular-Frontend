import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TrainerComponent } from './trainer/trainer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    InfoComponent,
    ChildComponent,
    TrainerComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class TrainersModule { }
