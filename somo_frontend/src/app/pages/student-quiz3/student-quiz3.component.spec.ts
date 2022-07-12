import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuiz3Component } from './student-quiz3.component';

describe('StudentQuiz3Component', () => {
  let component: StudentQuiz3Component;
  let fixture: ComponentFixture<StudentQuiz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQuiz3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQuiz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
