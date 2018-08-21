import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  isButtonVisible = true;

  onFooterButtonClicked() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  onFooterLinkClicked() {
    window.scroll({top: 0, left: 0});
  }

  private isScrollBarVisible(): boolean {
    return document.body.clientHeight > window.innerHeight;
  }
}
