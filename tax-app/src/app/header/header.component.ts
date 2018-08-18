import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'soci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  logoImage = '/assets/images/tax-logo.svg';
  isSignInVisible = false;
  isSignOutVisible = false;
  isUserAnAdmin: boolean;
  @Output() isHamburgerClicked = new EventEmitter();

  ngOnInit(): void {
  }

  onClicked() {
    this.isHamburgerClicked.emit();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0 });
  }

  // onSignInClicked() {
  //   this.authService.googleLogin();
  // }
  //
  // onSignOutClicked() {
  //   this.authService.signOut();
  // }
}
