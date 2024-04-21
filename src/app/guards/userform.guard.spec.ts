import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { userformGuard } from './userform.guard';

describe('userformGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userformGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
