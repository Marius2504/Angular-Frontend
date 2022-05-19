import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntrenoriComponent } from './antrenori/antrenori.component';
import { AntrenorRoutingModule } from './antrenor-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AntrenorComponent } from './antrenor/antrenor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AntrenoriComponent,
    ChildComponent,
    AntrenorComponent,
  ],
  imports: [
    CommonModule,
    AntrenorRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AntrenoriModule { }
