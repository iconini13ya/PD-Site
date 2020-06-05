import { TestBed } from '@angular/core/testing';

import { SqlrequestService } from './sqlrequest.service';

describe('SqlrequestService', () => {
  let service: SqlrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
