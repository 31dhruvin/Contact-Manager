import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authServiceEndpoint:string = "http://localhost:8081/contacts";
  

    constructor(private http: HttpClient) { }
    getContacts(){
      const url = `${this.authServiceEndpoint}/get`;
      console.log(url);
      return this.http.get(url);
    }
    addContact(contact:any){
      const url = `${this.authServiceEndpoint}/add`;
      console.log(url);
      return this.http.post(url, contact);
    }
    deleteContact(id:any){
      return this.http.delete(`${this.authServiceEndpoint}/delete?id=` + id);
    }
    updateContact(contact:any){
      const url = `${this.authServiceEndpoint}/update`;
      console.log(url);
      return this.http.put(url, contact);
    }
}
