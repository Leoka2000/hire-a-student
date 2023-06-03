import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  isStudentRouteActive(): boolean {
    return this.router.url.startsWith('/students');
  }
}