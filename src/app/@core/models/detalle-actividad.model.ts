import { Actividad } from './actividad.model';

export class DetalleActividad {
  public idDetalleActividad: number = 0;
  public idActividad?: number;
  public fecha?: Date | null;
  public horas?: number | null;
  public idActividadNavigation?: Actividad;
}
