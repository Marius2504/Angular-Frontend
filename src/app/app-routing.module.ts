import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/trainers/login/login.component';

const routes: Routes = [
{ path:'',loadChildren:() => import('src/app/modules/trainers/trainers.module').then(m => m.TrainersModule)},
{
    path:'login',
    component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
