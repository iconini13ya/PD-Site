import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';


const serverUrl = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class SqlrequestService {
  User:any;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = {
    headers: this.headers,
    observe: 'response' as 'body',
  }

  constructor(private http:HttpClient) {}

   getPosts(){
    return this.http.get(serverUrl+"posts", this.options).toPromise();
  }
  getProgres(){
    return this.http.get(serverUrl+"pdProgress", this.options).toPromise();
  }
  Login(Login,Password){
    const Myparams = new HttpParams().set("login",Login).set("password",Password);
    let Cashoptions={
      headers:this.headers,
      observe:'response' as 'body',
      params:Myparams,
    }
    return this.http.get(serverUrl+"Login",Cashoptions).toPromise();
  }
  editPost(PostContent){
    var myDate = formatDate(new Date(), 'dd.MM.yyyy', 'en');
    const PostParams = new HttpParams().set("postContent",PostContent).set("date",myDate).set("postedBy",this.User.name+" "+this.User.secondname);
    let PostCashoptions={
      headers:this.headers,
      observe:'response' as 'body',
      params:PostParams,  
    }
    return this.http.post(serverUrl+"EditPost",PostParams,PostCashoptions).toPromise();
    
  }
}
