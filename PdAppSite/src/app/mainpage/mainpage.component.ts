import { Component, OnInit } from '@angular/core';
import { SqlrequestService } from '../sqlrequest.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit { 
  
  constructor(private sqlService:SqlrequestService,private router:Router,private appComponent:AppComponent,private location: Location) { 
    
  }
  Posts;
  progressLvl
  CashLoginedin=false;
  PostContent:string;
  async ngOnInit() {
    await this.getPosts().then(() => {});
    await this.getProgres().then(()=>{});
    this.progressLvl=this.progressLvl[0].progress;
    this.CashLoginedin=this.appComponent.LogginedIn;
    
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
  async EditPost(){
    await this.sqlService.editPost(this.PostContent).then();
    this.PostContent="";
    this.ngOnInit();
  }

}
