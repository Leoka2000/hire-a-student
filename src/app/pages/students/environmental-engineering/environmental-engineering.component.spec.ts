import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalEngineeringComponent } from './environmental-engineering.component';

describe('EnvironmentalEngineeringComponent', () => {
  let component: EnvironmentalEngineeringComponent;
  let fixture: ComponentFixture<EnvironmentalEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalEngineeringComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
