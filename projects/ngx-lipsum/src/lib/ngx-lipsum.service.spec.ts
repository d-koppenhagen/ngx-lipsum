import { TestBed } from '@angular/core/testing';

import { NgxLipsumService } from './ngx-lipsum.service';

describe('NgxLipsumService', () => {
  let service: NgxLipsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLipsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
