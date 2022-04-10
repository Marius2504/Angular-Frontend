import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntrenorComponent } from './antrenor/antrenor.component';
import { AntrenoriComponent } from './antrenori/antrenori.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'antrenori'
  },
  {
    path:'antrenori',
    component:AntrenoriComponent
  },
  {
    path:'antrenor/:id',
    component:AntrenorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntrenorRoutingModule { }
