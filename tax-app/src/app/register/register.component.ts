import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService, TokenPayload} from "../authentication.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/taxcalculator');
    }, (err) => {
      console.error(err);
    });
  }

}
