import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

import {AuthenticationService} from "../authentication/authentication.service";
import {TokenPayload} from "../authentication/token-payload";

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
    }, () => {
      this.openSnackBar('Username or Password is Incorrect');
    });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2500});
  }
}
