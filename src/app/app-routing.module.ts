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
import { FoodSciencesComponent } from './pages/students/food-sciences/food-sciences.component';
import { ArchitectureComponent } from './pages/students/architecture/architecture.component';
import { EnvironmentalEngineeringComponent } from './pages/students/environmental-engineering/environmental-engineering.component';
import { MechanicalEngineeringComponent } from './pages/students/mechanical-engineering/mechanical-engineering.component';
import { MechatronicalEngineeringComponent } from './pages/students/mechatronical-engineering/mechatronical-engineering.component';
import { BiologyBiochemicalEngineeringComponent } from './pages/students/biology-biochemical-engineering/biology-biochemical-engineering.component';
import { ChemistryChemicalEngineeringComponent } from './pages/students/chemistry-chemical-engineering/chemistry-chemical-engineering.component';
import { AgricultureComponent } from './pages/students/agriculture/agriculture.component';
import { MathematicsComponent } from './pages/students/mathematics/mathematics.component';
import { NaturalSciencesComponent } from './pages/students/natural-sciences/natural-sciences.component';
import { PhysicsComponent } from './pages/students/physics/physics.component';
import { PrivateClassesComponent } from './pages/students/private-classes/private-classes.component';
import { PsychologyComponent } from './pages/students/psychology/psychology.component';
import { ElectricalEngineeringComponent } from './pages/students/electrical-engineering/electrical-engineering.component';
import { DesignComponent } from './pages/students/design/design.component';
import { MarketingComponent } from './pages/students/marketing/marketing.component';
import { LifeSciencesComponent } from './pages/students/life-sciences/life-sciences.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path: 'job-positions', component: JobPositionsComponent},
  {path: 'make-job-post', component: MakeJobPostComponent},
  {path: 'students/law', component: LawComponent},
  {path: 'students/health-care', component: MedicalSciencesComponent}, 
  {path: 'students/human-sciences', component: HumanSciencesComponent}, 
  {path: 'students/economics-and-business', component: EconomicsBusinessComponent},
  {path: 'students/pedagogy', component: PedagogyComponent},
  {path: 'students/it', component: ItComponent},
  {path: 'students/food-sciences', component: FoodSciencesComponent},
  {path: 'students/architecture', component: ArchitectureComponent},
  {path: 'students/environmental-engineering', component: EnvironmentalEngineeringComponent},
  {path: 'students/mechanical-engineering', component: MechanicalEngineeringComponent},
  {path: 'students/mechatronics-egineering', component: MechatronicalEngineeringComponent},
  {path: 'students/biology-biochemical-engineering', component: BiologyBiochemicalEngineeringComponent},
  {path: 'students/chemistry-chemical-engineering', component: ChemistryChemicalEngineeringComponent},
  {path: 'students/agriculture', component: AgricultureComponent},
  {path: 'students/mathematics', component: MathematicsComponent},
  {path: 'students/natural-sciences', component: NaturalSciencesComponent},
  {path: 'students/physics', component: PhysicsComponent},
  {path: 'students/private-classes', component: PrivateClassesComponent},
  {path: 'students/psychology', component: PsychologyComponent},
  {path: 'students/electrical-engineering', component: ElectricalEngineeringComponent},
  {path: 'students/design', component: DesignComponent},
  {path: 'students/marketing', component: MarketingComponent},
  {path: 'students/life-sciences', component: LifeSciencesComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'}, // to set home as default page
  { path: '**', component: ErrorPageComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
