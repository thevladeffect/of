import { TestBed } from '@angular/core/testing';

import { OfService } from './of.service';

describe('OfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfService = TestBed.get(OfService);
    expect(service).toBeTruthy();
  });
});
