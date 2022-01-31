import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { DashboardActividadesComponent } from './components/dashboard-actividades/dashboard-actividades.component';
import { ActividadesPage } from './pages/actividades/actividades.page';

@NgModule({
  declarations: [ActividadesPage, DashboardActividadesComponent],
  imports: [CommonModule, ActividadesRoutingModule, DxDataGridModule],
})
export class ActividadesModule {}
