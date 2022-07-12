import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuiz1Component } from './student-quiz1.component';

describe('StudentQuiz1Component', () => {
  let component: StudentQuiz1Component;
  let fixture: ComponentFixture<StudentQuiz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQuiz1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQuiz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
