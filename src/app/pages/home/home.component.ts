import { Component, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
// import { ScrollService } from 'src/app/scroll-service/scroll-service.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public viewportScroller: ViewportScroller,
    private elementRef: ElementRef,
    public translate: TranslateService
  ) {}

  scrollTo(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
