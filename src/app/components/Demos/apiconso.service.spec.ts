import { TestBed } from '@angular/core/testing';

import { ApiconsoService } from './apiconso.service';

describe('ApiconsoService', () => {
  let service: ApiconsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
