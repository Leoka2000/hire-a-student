import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { CookieConsentComponent } from './cookie-consent.component'
/**/
const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'https://megyamelo.com', 
  },
  position: 'bottom',
  theme: 'edgeless',
  palette: {
    popup: {
      background: '#000',
    },
    button: {
      background: '#f1d600',
    },
  },
  
  type: 'opt-in',
};

@NgModule({
  declarations: [
    CookieConsentComponent
  ],
  imports: [
    CommonModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  exports: [NgcCookieConsentModule],
})
export class CookieConsentModule { }
