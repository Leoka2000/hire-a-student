import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSciencesComponent } from './health-sciences.component';

describe('HealthSciencesComponent', () => {
  let component: HealthSciencesComponent;
  let fixture: ComponentFixture<HealthSciencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthSciencesComponent]
    });
    fixture = TestBed.createComponent(HealthSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
