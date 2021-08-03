import { TestBed } from '@angular/core/testing';

import { OthercaseService } from './othercase.service';

describe('OthercaseService', () => {
  let service: OthercaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthercaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
