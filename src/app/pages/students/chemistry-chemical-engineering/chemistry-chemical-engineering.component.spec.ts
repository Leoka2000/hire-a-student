import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryChemicalEngineeringComponent } from './chemistry-chemical-engineering.component';

describe('ChemistryChemicalEngineeringComponent', () => {
  let component: ChemistryChemicalEngineeringComponent;
  let fixture: ComponentFixture<ChemistryChemicalEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemistryChemicalEngineeringComponent]
    });
    fixture = TestBed.createComponent(ChemistryChemicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
