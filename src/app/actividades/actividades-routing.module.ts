import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACTIVIDADES_ROUTE } from './pages/actividades/actividades.route';

const routes: Routes = [ACTIVIDADES_ROUTE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesRoutingModule {}
