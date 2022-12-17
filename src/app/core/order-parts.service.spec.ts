import { TestBed } from '@angular/core/testing';

import { PartsAndSupportService } from './parts-and-support.service';

describe('OrderPartsService', () => {
  let service: PartsAndSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAndSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
