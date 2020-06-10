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




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainpageComponent,
    LogInComponent,
    ProjdevelopersComponent
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
