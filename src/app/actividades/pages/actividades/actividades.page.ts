import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Response } from 'src/app/@core/interfaces/response';
import { Actividad } from 'src/app/@core/models/actividad.model';
import { ActividadService } from 'src/app/@core/services/actividad.service';

@Component({
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.css'],
})
export class ActividadesPage implements OnInit {
  //#region Inputs
  //#endregion

  //#region Output
  //#endregion

  //#region ViewChild
  //#endregion

  //#region Models
  actividades: Actividad[] = [];
  //#endregion

  //#region atributos (generales)
  idEmpleado!: number;
  //#endregion

  //#region Atributos privados
  //#endregion

  //#region atributos (componentes)
  //#endregion

  //#region Constructor y ciclos de vida
  constructor(
    private actividadService: ActividadService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.idEmpleado = JSON.parse(localStorage.getItem('userInfo')).idEmpleado;
  }
  ngOnInit() {
    this.obtenerActividadesPorEmpleado(this.idEmpleado);
  }
  //#endregion

  //#region servicios

  private guardarActividad(entity: Actividad): Observable<Actividad> {
    if (entity.idActividad > 0) {
      return this.actividadService.update('', entity, {
        mapFn: (res) => res.result,
      });
    } else {
      return this.actividadService.add(entity, {
        mapFn: (res) => res.result,
      });
    }
  }

  private obtenerActividadesPorEmpleado(idEmpleado: number) {
    const params = new HttpParams()
      .append('filter', `IdEmpleado=${idEmpleado}`)
      .append('includes', 'IdEmpleadoNavigation');

    this.actividadService
      .list<Actividad[]>({
        urlPostfix: 'GetListByAdvanceQuery',
        params: params,
        mapFn: (res) => res.result || [],
      })
      .subscribe((result) => {
        this.actividades = result;
      });
  }

  private eliminarActividad(idActividad: number): Observable<Response> {
    return this.actividadService.delete<any>(idActividad, {
      mapFn: (res: Response) => res,
    });
  }
  //#endregion

  //#region  Eventos
  onUpdateActividad(data: any) {
    const ACTIVIDAD: Actividad = {
      ...data,
      idEmpleado: this.idEmpleado,
    };

    data.idEmpleado = this.idEmpleado;

    this.guardarActividad(ACTIVIDAD).subscribe((result) => {
      if (result) {
        this.toastrService.success('Actividad guardada correctamente');
        this.obtenerActividadesPorEmpleado(this.idEmpleado);
      }
    });
  }

  onRemoveActividad(data: any) {
    if (!data.idActividad) {
      return;
    } else {
      this.eliminarActividad(data.idActividad).subscribe(
        ({ isSuccess, message }) => {
          if (isSuccess) {
            this.toastrService.success('Actividad eliminada correctamente');
          } else {
            this.toastrService.error(message);
          }
        }
      );
    }
  }

  onClickAddHours(data: Actividad) {
    if (data.idActividad)
      this.router.navigate([
        '/actividades/detalle-actividad',
        data.idActividad,
      ]);
  }

  //#endregion

  //#region Métodos privados
  //#endregion
}
