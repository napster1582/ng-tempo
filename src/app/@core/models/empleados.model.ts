import { Actividad } from './actividad.model';

export class Empleados {
  public id: number = 0;
  public idUser: string = '';
  public documento: string = '';
  public nombres: string = '';
  public apellidos: string = '';
  public actividad: Actividad[] = [];
}
