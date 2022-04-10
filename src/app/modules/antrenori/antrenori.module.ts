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




@NgModule({
  declarations: [
    AntrenoriComponent,
    ChildComponent,
    AntrenorComponent
  ],
  imports: [
    CommonModule,
    AntrenorRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class AntrenoriModule { }
