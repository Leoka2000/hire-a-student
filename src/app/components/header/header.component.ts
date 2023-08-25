import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
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
    { code: 'hu', label: 'Magyar' },
  ];

  constructor(
    private router: Router,
    public translate: TranslateService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
  closeNavbar(): void {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
  isStudentRouteActive(): boolean {
    return this.router.url.startsWith('/students');
  }
  isLanguageChanging: boolean = false;

  switchLanguage(languageCode: string): void {
    this.isLanguageChanging = true; // Display the loader

    this.translate.use(languageCode)
      .subscribe(() => {
        this.isLanguageChanging = false; // Hide the loader when the language is successfully changed
      });
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    const dropdownToggle = this.elementRef.nativeElement.querySelector('.dropdown-toggle');
    const isClickInsideNavbar = navbarCollapse.contains(event.target);
    const isClickInsideDropdownToggle = dropdownToggle.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideDropdownToggle && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}
