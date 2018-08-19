import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'soci-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  isButtonVisible = true;

  ngOnInit() {
    // this.isButtonVisible = this.isScrollBarVisible();
  }

  onFooterButtonClicked() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  onFooterLinkClicked() {
    window.scroll({ top: 0, left: 0 });
  }

  private isScrollBarVisible(): boolean {
    return document.body.clientHeight > window.innerHeight;
  }
}
