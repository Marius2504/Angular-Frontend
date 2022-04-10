import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/antrenori/login/login.component';

const routes: Routes = [
{
    path:'login',
    component:LoginComponent
},
{
  path:'',
  loadChildren:() => import('src/app/modules/antrenori/antrenori.module').then(m => m.AntrenoriModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
