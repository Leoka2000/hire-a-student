import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologyBiochemicalEngineeringComponent } from './biology-biochemical-engineering.component';

describe('BiologyBiochemicalEngineeringComponent', () => {
  let component: BiologyBiochemicalEngineeringComponent;
  let fixture: ComponentFixture<BiologyBiochemicalEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiologyBiochemicalEngineeringComponent]
    });
    fixture = TestBed.createComponent(BiologyBiochemicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
