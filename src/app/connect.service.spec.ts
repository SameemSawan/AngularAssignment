import { TestBed } from '@angular/core/testing';

import { CONNECTService } from './connect.service';

describe('CONNECTService', () => {
  let service: CONNECTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CONNECTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
