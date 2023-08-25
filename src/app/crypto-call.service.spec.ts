import { TestBed } from '@angular/core/testing';

import { CryptoCallService } from './crypto-call.service';

describe('CryptoCallService', () => {
  let service: CryptoCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
