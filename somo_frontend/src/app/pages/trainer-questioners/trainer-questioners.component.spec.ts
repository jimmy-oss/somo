import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerQuestionersComponent } from './trainer-questioners.component';

describe('TrainerQuestionersComponent', () => {
  let component: TrainerQuestionersComponent;
  let fixture: ComponentFixture<TrainerQuestionersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerQuestionersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerQuestionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
