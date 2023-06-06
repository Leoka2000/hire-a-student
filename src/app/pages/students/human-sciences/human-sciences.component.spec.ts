import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanSciencesComponent } from './human-sciences.component';

describe('HumanSciencesComponent', () => {
  let component: HumanSciencesComponent;
  let fixture: ComponentFixture<HumanSciencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanSciencesComponent]
    });
    fixture = TestBed.createComponent(HumanSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
