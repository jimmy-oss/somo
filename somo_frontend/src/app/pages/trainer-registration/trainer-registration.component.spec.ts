import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRegistrationComponent } from './trainer-registration.component';

describe('TrainerRegistrationComponent', () => {
  let component: TrainerRegistrationComponent;
  let fixture: ComponentFixture<TrainerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
