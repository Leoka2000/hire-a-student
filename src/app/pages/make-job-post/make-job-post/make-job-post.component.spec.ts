import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeJobPostComponent } from './make-job-post.component';

describe('MakeJobPostComponent', () => {
  let component: MakeJobPostComponent;
  let fixture: ComponentFixture<MakeJobPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeJobPostComponent]
    });
    fixture = TestBed.createComponent(MakeJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
