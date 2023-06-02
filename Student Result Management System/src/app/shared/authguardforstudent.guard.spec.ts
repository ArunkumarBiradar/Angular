import { TestBed } from '@angular/core/testing';

import { AuthguardforstudentGuard } from './authguardforstudent.guard';

describe('AuthguardforstudentGuard', () => {
  let guard: AuthguardforstudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardforstudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
