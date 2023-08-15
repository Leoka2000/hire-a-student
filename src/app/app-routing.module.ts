import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { JobPositionsComponent } from './pages/job-positions/job-positions/job-positions.component';
import { MakeJobPostComponent } from './pages/make-job-post/make-job-post/make-job-post.component';
import { LawComponent } from './pages/students/law/law.component';
import { MedicalSciencesComponent } from './pages/students/medical-sciences/medical-sciences.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HumanSciencesComponent } from './pages/students/human-sciences/human-sciences.component';
import { EconomicsBusinessComponent } from './pages/students/economics-business/economics-business.component';
import { PedagogyComponent } from './pages/students/pedagogy/pedagogy.component';
import { ItComponent } from './pages/students/it/it.component';
import { HealthSciencesComponent} from './pages/students/health-sciences/health-sciences.component';
import { DentistryComponent } from './pages/students/dentistry/dentistry.component';
import { AgricultureComponent } from './pages/students/agriculture/agriculture.component';
import { PrivateClassesComponent } from './pages/students/private-classes/private-classes.component';
import { DesignComponent } from './pages/students/design/design.component';
import { PharmacyComponent } from './pages/students/pharmacy/pharmacy.component';
import { EngineeringComponent } from './pages/students/engineering/engineering.component';
import { ScienceTechnologyComponent } from './pages/students/science-technology/science-technology.component';
import { MusicComponent } from './pages/students/music/music.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path: 'job-positions', component: JobPositionsComponent},
  {path: 'make-job-post', component: MakeJobPostComponent},
  {path: 'students/law', component: LawComponent},
  {path: 'students/health-care', component: MedicalSciencesComponent}, 
  {path: 'students/human-sciences', component: HumanSciencesComponent}, 
  {path: 'students/health-sciences', component: HealthSciencesComponent}, 
  {path: 'students/dentistry', component: DentistryComponent},
  {path: 'students/economics-and-business', component: EconomicsBusinessComponent},
  {path: 'students/pharmacy', component: PharmacyComponent},
  {path: 'students/engineering', component: EngineeringComponent},
  {path: 'students/science-and-technology', component: ScienceTechnologyComponent},
  {path: 'students/music', component: MusicComponent},
  {path: 'students/pedagogy', component: PedagogyComponent},
  {path: 'students/it', component: ItComponent},
  {path: 'students/agriculture-food-sciences-environmental-management', component: AgricultureComponent},
  {path: 'students/private-classes', component: PrivateClassesComponent},
  {path: 'students/design', component: DesignComponent},


  {path: '', redirectTo: 'home', pathMatch: 'full'}, // to set home as default page
  { path: '**', component: ErrorPageComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
