import { TestBed } from '@angular/core/testing';

import { DataLoadingService } from './data-loading.service';

describe('DataLoadingService', () => {
  let service: DataLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
