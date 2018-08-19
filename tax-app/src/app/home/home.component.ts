import { Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'soci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public auth: AuthenticationService) {
  }
}
