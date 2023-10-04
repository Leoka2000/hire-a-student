import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'megy-a-melo';
  showArrow = false;
  
  @ViewChild(PopUpComponent)
  popUpComponent!: PopUpComponent;

  constructor(
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef,
    private cookieService: NgcCookieConsentService,
    private dialog: MatDialog,
  ) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    this.showArrow = scrollY > 100; // Adjust this value to control when the arrow appears
  }
  ngOnInit() {
    setTimeout(() => {
      this.openPopUp();
    }, 3000);
  }

  openPopUp() {
    this.dialog.open(PopUpComponent);
  }
}
