import { TestBed } from '@angular/core/testing';

import { PollenApiService } from './pollen-api.service';

describe('PollenApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollenApiService = TestBed.get(PollenApiService);
    expect(service).toBeTruthy();
  });
});
