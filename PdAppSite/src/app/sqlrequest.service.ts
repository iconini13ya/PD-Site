import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const serverUrl = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class SqlrequestService {

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
}
