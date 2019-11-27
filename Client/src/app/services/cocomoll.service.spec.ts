import { TestBed } from '@angular/core/testing';

import { CocomollService } from './cocomoll.service';

describe('CocomollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocomollService = TestBed.get(CocomollService);
    expect(service).toBeTruthy();
  });
});
