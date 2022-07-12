import { TestBed } from '@angular/core/testing';

import { AssignmentsServiceService } from './assignments-service.service';

describe('AssignmentsServiceService', () => {
  let service: AssignmentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
