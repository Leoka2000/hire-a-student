import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSciencesComponent } from './medical-sciences.component';

describe('MedicalSciencesComponent', () => {
  let component: MedicalSciencesComponent;
  let fixture: ComponentFixture<MedicalSciencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalSciencesComponent]
    });
    fixture = TestBed.createComponent(MedicalSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
