import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceTechnologyComponent } from './science-technology.component';

describe('ScienceTechnologyComponent', () => {
  let component: ScienceTechnologyComponent;
  let fixture: ComponentFixture<ScienceTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScienceTechnologyComponent]
    });
    fixture = TestBed.createComponent(ScienceTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
