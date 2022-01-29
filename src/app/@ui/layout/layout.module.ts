import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DrawerComponent } from './components/drawer/drawer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [DrawerComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [DrawerComponent],
})
export class LayoutModule {}
