import { Component, ElementRef, OnInit  } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  
  constructor(private viewportScroller: ViewportScroller, private elementRef: ElementRef, public translate: TranslateService) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
translate.use(browserLang?.match(/en|hu/) ? browserLang : 'en');


  }
  scrollTo(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
/*export class HomeComponent {
  
  constructor(private viewportScroller: ViewportScroller, private elementRef: ElementRef, public translate: TranslateService) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
translate.use(browserLang?.match(/en|hu/) ? browserLang : 'en');


  }
  scrollTo(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }*/
