import { TestBed } from '@angular/core/testing';

import { TrainersServicesService } from './trainers-services.service';

describe('TrainersServicesService', () => {
  let service: TrainersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
