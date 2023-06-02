import { TestBed } from '@angular/core/testing';

import { StudentresultService } from './studentresult.service';

describe('StudentresultService', () => {
  let service: StudentresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
