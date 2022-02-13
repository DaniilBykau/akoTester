import { TestBed } from '@angular/core/testing';

import { QustionService } from './qustion.service';

describe('QustionService', () => {
  let service: QustionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QustionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
