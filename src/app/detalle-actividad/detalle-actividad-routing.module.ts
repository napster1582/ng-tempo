import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleActividadFormPage } from './pages/detalle-actividad-form/detalle-actividad-form.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleActividadFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleActividadRoutingModule {}
