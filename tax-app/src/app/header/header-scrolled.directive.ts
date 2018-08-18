import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sociHeaderscrolled]'
})
export class HeaderscrolledDirective {

  constructor(private el: ElementRef) { }

@HostListener('window:scroll', [])
  private onWindowScroll() {
    if (window.scrollY > 0) {
      this.el.nativeElement.style.boxShadow = '0 5px 6px -3px rgba(0,0,0,0.2)';
    } else {
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }
}
