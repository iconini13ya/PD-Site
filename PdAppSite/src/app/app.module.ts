import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClientModule }   from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import {FormsModule} from '@angular/forms';
import { ProjdevelopersComponent } from './projdevelopers/projdevelopers.component';
import { GiturlComponent } from './giturl/giturl.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { DevelopersComponent } from './developers/developers.component';
import { ProjectThemeComponent } from './project-theme/project-theme.component';
import { ProjectWorkComponent } from './project-work/project-work.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainpageComponent,
    LogInComponent,
    ProjdevelopersComponent,
    GiturlComponent,
    AdminBarComponent,
    DevelopersComponent,
    ProjectThemeComponent,
    ProjectWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
