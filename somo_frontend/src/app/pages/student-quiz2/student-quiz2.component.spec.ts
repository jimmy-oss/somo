import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuiz2Component } from './student-quiz2.component';

describe('StudentQuiz2Component', () => {
  let component: StudentQuiz2Component;
  let fixture: ComponentFixture<StudentQuiz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQuiz2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQuiz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
