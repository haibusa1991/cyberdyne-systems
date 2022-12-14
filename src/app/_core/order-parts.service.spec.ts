import { TestBed } from '@angular/core/testing';

import { OrderPartsService } from './order-parts.service';

describe('OrderPartsService', () => {
  let service: OrderPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
