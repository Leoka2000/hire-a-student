import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringComponent } from './engineering.component';

describe('EngineeringComponent', () => {
  let component: EngineeringComponent;
  let fixture: ComponentFixture<EngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringComponent]
    });
    fixture = TestBed.createComponent(EngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
