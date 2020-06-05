import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path: 'users', component:UserComponent},
  {path:'', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
