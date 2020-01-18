import { TestBed } from '@angular/core/testing';

import { PhonesApiService } from './phones-api.service';

describe('PhonesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonesApiService = TestBed.get(PhonesApiService);
    expect(service).toBeTruthy();
  });
});
