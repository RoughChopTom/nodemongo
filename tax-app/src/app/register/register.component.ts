import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material';

import {AuthenticationService} from "../authentication/authentication.service";
import {TokenPayload} from "../authentication/token-payload";

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

  constructor(private snackBar: MatSnackBar, private auth: AuthenticationService, private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe((result) => {
      if(result['message']){
        this.openSnackBar(result['message']);
        return;
      }
      this.router.navigateByUrl('/taxcalculator');
    }, () => {
      this.openSnackBar('Registration Failed')
    });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2500});
  }
}
