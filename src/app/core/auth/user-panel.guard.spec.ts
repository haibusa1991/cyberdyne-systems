import { TestBed } from '@angular/core/testing';

import { UserPanelGuard } from './user-panel.guard';

describe('UserPanelGuard', () => {
  let guard: UserPanelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserPanelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
