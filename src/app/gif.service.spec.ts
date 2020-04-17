import { TestBed } from '@angular/core/testing';

import { TenorService } from './gif.service';

describe('TenorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenorService = TestBed.get(TenorService);
    expect(service).toBeTruthy();
  });
});
