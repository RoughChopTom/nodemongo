import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'soci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  logoImage = '/assets/images/tax-logo.svg';
  isSignInVisible = false;
  isSignOutVisible = false;
  @Output() isHamburgerClicked = new EventEmitter();

  constructor(public auth: AuthenticationService, private router: Router){}

  onClicked() {
    this.isHamburgerClicked.emit();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0 });
  }

  onSignInClicked() {
  }

  onSignOutClicked() {
    this.auth.logout();
    this.router.navigateByUrl('/home');
  }
}
