import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerQuestioners1Component } from './trainer-questioners1.component';

describe('TrainerQuestioners1Component', () => {
  let component: TrainerQuestioners1Component;
  let fixture: ComponentFixture<TrainerQuestioners1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerQuestioners1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerQuestioners1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
