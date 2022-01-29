import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './router/app.route';
import { AUTH_ROUTES } from './router/auth.route';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...AUTH_ROUTES,
  ...APP_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
