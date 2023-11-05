import { TestBed } from '@angular/core/testing';

import { CommonfuncService } from './commonfunc.service';

describe('CommonfuncService', () => {
  let service: CommonfuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonfuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
