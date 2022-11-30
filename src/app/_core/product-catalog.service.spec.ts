import { TestBed } from '@angular/core/testing';

import { ProductsCatalogService } from './products-catalog.service';

describe('ProductCatalogService', () => {
  let service: ProductsCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
