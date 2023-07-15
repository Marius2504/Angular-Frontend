import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'trainers'
  },
  {
    path:'trainers',
    component:InfoComponent
  },
  {
    path:'trainer/:id',
    component:TrainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
