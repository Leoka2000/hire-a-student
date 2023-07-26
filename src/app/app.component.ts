import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { ScrollService } from '../app/scroll-service/scroll-service.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {
  title = 'megy-a-melo';

  constructor(
    // private scrollService: ScrollService,
    private router: Router
  ) { }

 /*() ngOnInit() {
    // Subscribe to the router events to listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Call the function to scroll to the top
        this.scrollToTop();
      }
    });
  }

  // Function to scroll to the top of the page
  scrollToTop() {
    window.scrollTo(0, 0);
  }*/
}
