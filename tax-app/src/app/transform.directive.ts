import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[sociMyTransform]'
})
export class TransformDirective {
  private translateY = 0;
  private translateX = 0;
  private scale = 1;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll') onscroll() {
    if (window.innerWidth <= 414 && window.innerHeight <= 736) {
      return;
    }
    this.transform(window.scrollY);
  }

  private transform(scrollY: number) {
    this.el.nativeElement.style.transform =
      'translateY(' + this.getTranslateY(scrollY) + 'px)' +
      'translateX(' + this.getTranslateX(scrollY) + 'px)' +
      'scale(' + this.getScale(scrollY) + ')';
  }

  private getTranslateY(scrollY: number) {
    if (scrollY >= 200) {
      return -202.169;
    }

    return -1.010845 * scrollY;
  }

  private getTranslateX(scrollY: number) {
    if (scrollY >= 200) {
      return -147.782;
    }

    return -0.73891 * scrollY;
  }

  private getScale(scrollY: number) {
    if (scrollY >= 200) {
       return 0.303339;
    }
    // 1 - .303339 / 200 = .003483305
    return 1 - (0.003483305 * scrollY);
  }

  // transform: translateY(-202.169px) translateX(-147.782px) scale(0.303339)
}
