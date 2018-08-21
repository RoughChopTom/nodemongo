import {Component, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  logoImage = '/assets/images/tax-logo.svg';

  constructor(public auth: AuthenticationService, private router: Router) {
  }

  scrollToTop() {
    window.scroll({top: 0, left: 0});
  }

  onSignOutClicked() {
    this.auth.logout();
    this.router.navigateByUrl('/home');
  }
}
