import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hu', label: 'Hungarian' }
  ];

  constructor(
    private router: Router,
    public translate: TranslateService
  ) {}

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  isStudentRouteActive(): boolean {
    return this.router.url.startsWith('/students');
  }

  switchLanguage(languageCode: string): void {
    this.translate.use(languageCode);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
