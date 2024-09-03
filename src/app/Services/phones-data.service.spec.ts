import { TestBed } from '@angular/core/testing';

import { PhonesDataService } from './phones-data.service';

describe('PhonesDataService', () => {
  let service: PhonesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
