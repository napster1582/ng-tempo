import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
} from 'devextreme-angular';
import { DetalleActividadRoutingModule } from './detalle-actividad-routing.module';
import { DetalleActividadFormPage } from './pages/detalle-actividad-form/detalle-actividad-form.page';

@NgModule({
  declarations: [DetalleActividadFormPage],
  imports: [
    CommonModule,
    DetalleActividadRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
  ],
})
export class DetalleActividadModule {}
