import { TestBed } from '@angular/core/testing';

import { LipsumService } from './lipsum.service';

describe('LipsumService', () => {
  let service: LipsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LipsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
