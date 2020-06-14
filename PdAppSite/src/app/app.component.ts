import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SqlrequestService } from './sqlrequest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Posts;
  progressLvl;
  LogginedIn: boolean;
  CashUserData;
  constructor(private router:Router,private sqlService:SqlrequestService,private location: Location) { 
    
  }
  async ngOnInit()  {
    this.LogginedIn=false;
    await this.getPosts().then(() => {});
    await this.getProgres().then(()=>{});
    this.progressLvl=this.progressLvl[0].progress;
    
  }
  

  async getProgres(){
    this.progressLvl=await this.sqlService.getProgres();
    this.progressLvl=this.progressLvl['body'];
  }
  async getPosts () {
    this.Posts = await this.sqlService.getPosts();
    this.Posts = this.Posts['body'];
  }
  goHome(){

    this.router.navigate(["/"]);
  }
  goLogin(){
    this.router.navigate(["/Login"]);
  }
  LogOut(){
    this.CashUserData="";
    this.LogginedIn=false;
    this.sqlService.User="";
    location.reload();
  }
  goGit(){
    this.router.navigate(["/Git"]);
  }
  goAdmin(){
    this.router.navigate(['/Admin']);
  }
  goDev(){
    this.router.navigate(["/Developers"]);
  }
  goTheme(){
    this.router.navigate(["/ProjectTheme"]);
  }
  goWork(){
    this.router.navigate(["/ProjectWork"])
  }

}



