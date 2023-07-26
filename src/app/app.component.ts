import { Component, ElementRef, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'megy-a-melo';
  showArrow = false;

  constructor(
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef,
  ) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    this.showArrow = scrollY > 100; // Adjust this value to control when the arrow appears
  }
}
