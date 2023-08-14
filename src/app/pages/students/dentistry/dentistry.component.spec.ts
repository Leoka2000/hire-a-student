import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistryComponent } from './dentistry.component';

describe('DentistryComponent', () => {
  let component: DentistryComponent;
  let fixture: ComponentFixture<DentistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistryComponent]
    });
    fixture = TestBed.createComponent(DentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
