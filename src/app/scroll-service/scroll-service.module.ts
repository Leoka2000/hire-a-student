/*import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private router: Router) {}

  init() {
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof NavigationEnd) {
        
        this.scrollToTop();
      }
    });
  }

  private scrollToTop() {
    const scrollElement = document.documentElement || document.body;
    scrollElement.scrollTop = 0;
  }
}*/
