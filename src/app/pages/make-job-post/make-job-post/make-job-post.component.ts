import { Component, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-make-job-post',
  templateUrl: './make-job-post.component.html',
  styleUrls: ['./make-job-post.component.css']
})

export class MakeJobPostComponent {
    constructor(
      private viewportScroller: ViewportScroller,
      private elementRef: ElementRef
      ) {} 
    
      scrollTo(elementId: string): void {
        const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    

