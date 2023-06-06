import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsBusinessComponent } from './economics-business.component';

describe('EconomicsBusinessComponent', () => {
  let component: EconomicsBusinessComponent;
  let fixture: ComponentFixture<EconomicsBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomicsBusinessComponent]
    });
    fixture = TestBed.createComponent(EconomicsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
