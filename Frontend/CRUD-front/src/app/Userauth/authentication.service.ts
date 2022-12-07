import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
// import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  authServiceEndpoint:string = "http://localhost:8082/auth";
  requestHeaders = new HttpHeaders({
    "No-Auth":"True"});

  constructor(private http: HttpClient) { }

  registerUser(newUser:any) {
    const url = `${this.authServiceEndpoint}/register`;
    console.log(url);
    return this.http.post(url, newUser, {responseType: 'text'});
  }
  

  deleteToken() {
    // return localStorage.removeItem("accessToken");
    localStorage.clear();
  }
  setToken(accessToken:string) {
    return localStorage.setItem("accessToken", accessToken);
  }
  setUserName(username:string){
    localStorage.setItem('username',username);
  }
  setName(name:string){
    localStorage.setItem('name',name);
  }
  getToken() {
    return localStorage.getItem("accessToken");
  }
  getUserName(){
    localStorage.getItem('username');
  }
  getName(){
    localStorage.getItem('name');
  }
  loginUser(newUser:any) {
    const url = `${this.authServiceEndpoint}/login`;
    console.log(url);
    return this.http.post(url, newUser, {headers: this.requestHeaders});
  }
  public getUser(){
    let user1=localStorage.getItem('username');
    return user1;
  }
  public getNameFromToken(){
    let user1=localStorage.getItem('name');
    return user1;
  }
}
