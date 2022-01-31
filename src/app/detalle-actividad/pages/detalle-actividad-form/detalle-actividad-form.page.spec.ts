import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActividadFormPage } from './detalle-actividad-form.page';

describe('DetalleActividadFormPage', () => {
  let component: DetalleActividadFormPage;
  let fixture: ComponentFixture<DetalleActividadFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActividadFormPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActividadFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
