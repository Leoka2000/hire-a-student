import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LawComponent } from './pages/students/law/law.component';
import { MedicalSciencesComponent } from './pages/students/medical-sciences/medical-sciences.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { JobPositionsComponent } from './pages/job-positions/job-positions/job-positions.component';
import { MakeJobPostComponent } from './pages/make-job-post/make-job-post/make-job-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HumanSciencesComponent } from './pages/students/human-sciences/human-sciences.component';
import { EconomicsBusinessComponent } from './pages/students/economics-business/economics-business.component';
import { PedagogyComponent } from './pages/students/pedagogy/pedagogy.component';
import { ItComponent } from './pages/students/it/it.component';
import { AgricultureComponent } from './pages/students/agriculture/agriculture.component';
import { PrivateClassesComponent } from './pages/students/private-classes/private-classes.component';
import { DesignComponent } from './pages/students/design/design.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HealthSciencesComponent } from './pages/students/health-sciences/health-sciences.component';
import { DentistryComponent } from './pages/students/dentistry/dentistry.component';
import { PharmacyComponent } from './pages/students/pharmacy/pharmacy.component';
import { EngineeringComponent } from './pages/students/engineering/engineering.component';
import { ScienceTechnologyComponent } from './pages/students/science-technology/science-technology.component';
import { MusicComponent } from './pages/students/music/music.component';
import { CookieConsentModule } from '../cookie-consent/cookie-consent.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LawComponent,
    MedicalSciencesComponent,
    ContactComponent,
    JobPositionsComponent,
    MakeJobPostComponent,
    HomeComponent,
    ErrorPageComponent,
    FooterComponent,
    HumanSciencesComponent,
    EconomicsBusinessComponent,
    PedagogyComponent,
    ItComponent,
    HealthSciencesComponent,
    AgricultureComponent,
    PrivateClassesComponent,
    DesignComponent,
    HealthSciencesComponent,
    DentistryComponent,
    PharmacyComponent,
    EngineeringComponent,
    ScienceTechnologyComponent,
    MusicComponent,
    PopUpComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    CookieConsentModule,
    SharedModule,  
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
