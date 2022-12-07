import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Userauth/authentication.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public router:Router, public auth: AuthenticationService) { }

}
