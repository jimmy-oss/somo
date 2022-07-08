import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultsComponent } from './student-results.component';

describe('StudentResultsComponent', () => {
  let component: StudentResultsComponent;
  let fixture: ComponentFixture<StudentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
