import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path: 'users', component:UserComponent},
  {path:'Login', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
