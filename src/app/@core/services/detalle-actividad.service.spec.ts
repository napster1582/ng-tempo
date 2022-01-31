import { TestBed } from '@angular/core/testing';

import { DetalleActividadService } from './detalle-actividad.service';

describe('DetalleActividadService', () => {
  let service: DetalleActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
