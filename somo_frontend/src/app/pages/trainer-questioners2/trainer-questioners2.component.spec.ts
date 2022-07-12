import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerQuestioners2Component } from './trainer-questioners2.component';

describe('TrainerQuestioners2Component', () => {
  let component: TrainerQuestioners2Component;
  let fixture: ComponentFixture<TrainerQuestioners2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerQuestioners2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerQuestioners2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
