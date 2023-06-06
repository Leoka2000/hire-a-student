import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalEngineeringComponent } from './electrical-engineering.component';

describe('ElectricalEngineeringComponent', () => {
  let component: ElectricalEngineeringComponent;
  let fixture: ComponentFixture<ElectricalEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalEngineeringComponent]
    });
    fixture = TestBed.createComponent(ElectricalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
