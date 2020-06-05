import { Component, OnInit } from '@angular/core';
import { SqlrequestService } from '../sqlrequest.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit { 
  
  constructor(private sqlService:SqlrequestService) { 
    
  }
  Posts;

  async ngOnInit() {
    await this.getPosts().then(() => {
    })
    console.log(this.Posts)
  }


  async getPosts () {
    this.Posts = await this.sqlService.getPosts()
    this.Posts = this.Posts['body']
  }

}
