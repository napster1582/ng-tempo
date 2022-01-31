import { DetalleActividad } from './detalle-actividad.model';
import { Empleados } from './empleados.model';

export class Actividad {
  public idActividad: number = 0;
  public descripcion: string = '';
  public idEmpleado?: number | null;
  public idEmpleadoNavigation?: Empleados;
  public detalleActividad?: DetalleActividad[];
}
