import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSideNavOpen = false;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
