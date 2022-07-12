import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerQuestioners3Component } from './trainer-questioners3.component';

describe('TrainerQuestioners3Component', () => {
  let component: TrainerQuestioners3Component;
  let fixture: ComponentFixture<TrainerQuestioners3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerQuestioners3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerQuestioners3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
