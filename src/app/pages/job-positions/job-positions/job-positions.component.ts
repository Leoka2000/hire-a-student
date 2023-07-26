import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-job-positions',
  templateUrl: './job-positions.component.html',
  styleUrls: ['./job-positions.component.css']
})
export class JobPositionsComponent {
  constructor(
    private viewportScroller: ViewportScroller,
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
