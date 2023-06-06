import { NgModule } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule 
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule {
  constructor(public translate: TranslateService, private viewportScroller: ViewportScroller,) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|hu/) ? browserLang : 'en');
    
  }
}
