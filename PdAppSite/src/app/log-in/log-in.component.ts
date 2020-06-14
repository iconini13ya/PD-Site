import { Component, OnInit } from '@angular/core';
import { SqlrequestService } from '../sqlrequest.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  UserLogin:string;
  UserPassword:string;
  LoginCorrect;
  constructor(private SQLService: SqlrequestService, private MainComponent:AppComponent,private router:Router) { }
  
  ngOnInit(): void {
    this.LoginCorrect=false;
    // this.UserLogin="";
    // this.UserPassword="";
    this.UserLogin="iconini13ya";
    this.UserPassword="VjSa1Der";
    //Убрать после режима отладки!!!!!
  }
  async Login(){
    let UserData;
    UserData = await this.SQLService.Login(this.UserLogin,this.UserPassword);
    await this.SQLService.Login(this.UserLogin,this.UserPassword).then(()=>{
       });
    UserData = UserData['body'];
    if(UserData==0){
      this.LoginCorrect=true;
    }
    else{
      this.SQLService.User=UserData[0];
      this.MainComponent.CashUserData=this.SQLService.User;
      this.MainComponent.LogginedIn=true;
      this.router.navigate(["/"]);
    }
  }

}
