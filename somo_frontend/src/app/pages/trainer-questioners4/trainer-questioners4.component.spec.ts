import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerQuestioners4Component } from './trainer-questioners4.component';

describe('TrainerQuestioners4Component', () => {
  let component: TrainerQuestioners4Component;
  let fixture: ComponentFixture<TrainerQuestioners4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerQuestioners4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerQuestioners4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
