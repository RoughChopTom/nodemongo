import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService, TokenPayload} from "../authentication.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private snackBar: MatSnackBar, private auth: AuthenticationService, private router: Router) {
  }

  signIn() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/taxcalculator');
    }, (err) => {
      this.openSnackBar('Username or Password is Incorrect');
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2500});
  }
}
