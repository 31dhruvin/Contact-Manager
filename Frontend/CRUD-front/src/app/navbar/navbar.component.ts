import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Userauth/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router, public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.auth.deleteToken();
    // window.location.reload();
    this.router.navigate([''])

  }
}
