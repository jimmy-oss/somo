import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraninerProfileComponent } from './traniner-profile.component';

describe('TraninerProfileComponent', () => {
  let component: TraninerProfileComponent;
  let fixture: ComponentFixture<TraninerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraninerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraninerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
