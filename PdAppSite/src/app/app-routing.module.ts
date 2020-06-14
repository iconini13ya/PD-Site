import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogInComponent } from './log-in/log-in.component';
import { GiturlComponent } from './giturl/giturl.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { DevelopersComponent } from './developers/developers.component';
import { ProjectThemeComponent } from './project-theme/project-theme.component';
import { ProjectWorkComponent } from './project-work/project-work.component';


const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path: 'users', component:UserComponent},
  {path:'Login', component:LogInComponent},
  {path:'Git', component:GiturlComponent},
  {path:'Admin', component:AdminBarComponent},
  {path:'Developers', component:DevelopersComponent},
  {path:'ProjectTheme', component:ProjectThemeComponent},
  {path:'ProjectWork', component:ProjectWorkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
