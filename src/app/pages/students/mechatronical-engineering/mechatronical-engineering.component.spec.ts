import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechatronicalEngineeringComponent } from './mechatronical-engineering.component';

describe('MechatronicalEngineeringComponent', () => {
  let component: MechatronicalEngineeringComponent;
  let fixture: ComponentFixture<MechatronicalEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechatronicalEngineeringComponent]
    });
    fixture = TestBed.createComponent(MechatronicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
