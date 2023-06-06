import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSciencesComponent } from './food-sciences.component';

describe('FoodSciencesComponent', () => {
  let component: FoodSciencesComponent;
  let fixture: ComponentFixture<FoodSciencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodSciencesComponent]
    });
    fixture = TestBed.createComponent(FoodSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
