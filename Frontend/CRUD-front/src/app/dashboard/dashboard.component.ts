import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Userauth/user';
import { AuthenticationService } from '../Contactdetails/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  contactDetails = null;
  constructor(private authService: AuthenticationService,
    private router: Router) {
      this.getUserContacts();
  }
  getUserContacts(){
    this.authService.getContacts().subscribe((data:any)=>{
      console.log(data);
      this.contactDetails = data;

    },error =>{
      console.log("some problem",error);
    });
  }
  deleteUserContact(contacts:any){
    this.authService.deleteContact(contacts.id).subscribe((data:any)=>{
      console.log(data);
      this.getUserContacts();
    },error =>{
      console.log("some problem",error);
    });
  }


}
