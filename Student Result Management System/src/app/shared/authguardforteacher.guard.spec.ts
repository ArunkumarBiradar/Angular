import { TestBed } from '@angular/core/testing';

import { AuthguardforteacherGuard } from './authguardforteacher.guard';

describe('AuthguardforteacherGuard', () => {
  let guard: AuthguardforteacherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardforteacherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
