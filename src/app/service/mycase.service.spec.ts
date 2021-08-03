import { TestBed } from '@angular/core/testing';

import { MycaseService } from './mycase.service';

describe('MycaseService', () => {
  let service: MycaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
