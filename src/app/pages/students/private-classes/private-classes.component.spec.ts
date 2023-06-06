import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateClassesComponent } from './private-classes.component';

describe('PrivateClassesComponent', () => {
  let component: PrivateClassesComponent;
  let fixture: ComponentFixture<PrivateClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateClassesComponent]
    });
    fixture = TestBed.createComponent(PrivateClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
