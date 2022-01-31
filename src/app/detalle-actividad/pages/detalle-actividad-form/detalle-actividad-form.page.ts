import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DetalleActividad } from 'src/app/@core/models/detalle-actividad.model';
import { DetalleActividadService } from 'src/app/@core/services/detalle-actividad.service';

@Component({
  templateUrl: './detalle-actividad-form.page.html',
  styleUrls: ['./detalle-actividad-form.page.css'],
})
export class DetalleActividadFormPage implements OnInit {
  //#region Inputs
  //#endregion

  //#region Output
  //#endregion

  //#region ViewChild
  @ViewChild('formDetalle', { static: false })
  formDetalle: DxFormComponent;
  //#endregion

  //#region Models
  detalleActividadForm: DetalleActividad = new DetalleActividad();
  horasActividad: DetalleActividad[] = [];
  //#endregion

  //#region atributos (generales)
  idActividad!: number;
  fechaActual = new Date();
  //#endregion

  //#region Atributos privados
  //#endregion

  //#region atributos (componentes)
  //#endregion

  //#region Constructor y ciclos de vida
  constructor(
    private activatedRoute: ActivatedRoute,
    private detalleActividadService: DetalleActividadService,
    private toastrService: ToastrService
  ) {
    this.onValueChangedHours = this.onValueChangedHours.bind(this);
    const snapshot = this.activatedRoute.snapshot;
    this.idActividad = +snapshot.paramMap.get('idActividad');
  }
  ngOnInit() {
    this.obtenerDetallesActividad(this.idActividad);
  }
  //#endregion

  //#region servicios

  guardarDetalleActividad(
    entity: DetalleActividad
  ): Observable<DetalleActividad> {
    return this.detalleActividadService.add(entity, {
      mapFn: (res) => res.result,
    });
  }

  actualizarDetalleActividad(
    entity: DetalleActividad
  ): Observable<DetalleActividad> {
    return this.detalleActividadService.update('', entity, {
      mapFn: (res) => res.result,
    });
  }

  obtenerDetallesActividad(idActividad: number) {
    const params = new HttpParams()
      .append('filter', `IdActividad=${idActividad}`)
      .append('includes', 'IdActividadNavigation');

    this.detalleActividadService
      .list<DetalleActividad[]>({
        urlPostfix: 'GetListByAdvanceQuery',
        params: params,
        mapFn: (res) => res.result || [],
      })
      .subscribe((detallesActividad) => {
        this.horasActividad = detallesActividad;
      });
  }
  //#endregion

  //#region  Eventos
  onClickGuardarFormulario() {
    const isValid = this.formDetalle.instance.validate().isValid;

    if (!isValid) {
      this.toastrService.warning(
        'Faltan campos por diligenciar en el formulario'
      );
      return;
    }

    const HOURS_VALUE = this.detalleActividadForm.horas;

    if (HOURS_VALUE > 8) {
      this.toastrService.warning(
        'El tiempo de dedicación no debe superar las ocho(8) horas'
      );
      return;
    }

    const DETALLE_ACTIVIDAD: DetalleActividad = {
      ...this.detalleActividadForm,
      idActividad: this.idActividad,
    };

    this.guardarDetalleActividad(DETALLE_ACTIVIDAD).subscribe((result) => {
      if (result) {
        this.toastrService.success('Tiempo agregado correctamente');
        this.obtenerDetallesActividad(this.idActividad);
        this.detalleActividadForm = new DetalleActividad();
      }
    });
  }

  onRowUpdatedHorasActividad({ data }: { data: DetalleActividad }) {
    this.actualizarDetalleActividad(data).subscribe((result) => {
      this.toastrService.success('Tiempo actualizado correctamente');
      this.obtenerDetallesActividad(this.idActividad);
    });
  }

  onClickPrevious() {
    window.history.back();
  }

  onValueChangedHours({ value, previousValue }) {
    if (Number(value) > 8) {
      this.toastrService.warning(
        'El tiempo de dedicación no debe superar las ocho(8) horas'
      );
      return;
    }
  }
  //#endregion

  //#region Métodos privados
  //#endregion
}
