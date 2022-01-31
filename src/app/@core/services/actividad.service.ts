import { Injectable } from '@angular/core';
import { NgxGenericRestService } from 'ngx-grs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActividadService extends NgxGenericRestService {
  constructor() {
    super({ baseUrl: environment.apiUrl, resourceName: 'Actividad' });
  }
}
