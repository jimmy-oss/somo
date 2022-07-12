import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuiz4Component } from './student-quiz4.component';

describe('StudentQuiz4Component', () => {
  let component: StudentQuiz4Component;
  let fixture: ComponentFixture<StudentQuiz4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQuiz4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQuiz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
