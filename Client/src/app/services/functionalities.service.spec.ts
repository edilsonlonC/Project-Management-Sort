import { TestBed } from '@angular/core/testing';

import { FunctionalitiesService } from './functionalities.service';

describe('FunctionalitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionalitiesService = TestBed.get(FunctionalitiesService);
    expect(service).toBeTruthy();
  });
});
