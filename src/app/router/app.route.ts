import { Routes } from '@angular/router';
import { AuthGuard } from '../@core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'actividades',

    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../actividades/actividades.module').then(
            (m) => m.ActividadesModule
          ),
        canActivate: [AuthGuard],
      },

      {
        path: 'detalle-actividad/:idActividad',
        loadChildren: () =>
          import('../detalle-actividad/detalle-actividad.module').then(
            (m) => m.DetalleActividadModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];
