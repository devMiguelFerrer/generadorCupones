import { TestBed } from '@angular/core/testing';

import { GenerarCuponesService } from './generar-cupones.service';

describe('GenerarCuponesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerarCuponesService = TestBed.get(GenerarCuponesService);
    expect(service).toBeTruthy();
  });
});
