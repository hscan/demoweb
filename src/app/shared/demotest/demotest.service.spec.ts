import { TestBed } from '@angular/core/testing';

import { DemotestService } from './demotest.service';

describe('DemotestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemotestService = TestBed.get(DemotestService);
    expect(service).toBeTruthy();
  });
});
