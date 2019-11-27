import { TestBed } from '@angular/core/testing';

import { CasosDeUsoService } from './casos-de-uso.service';

describe('CasosDeUsoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasosDeUsoService = TestBed.get(CasosDeUsoService);
    expect(service).toBeTruthy();
  });
});
