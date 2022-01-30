import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxPopupModule, DxToastModule } from 'devextreme-angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxToastModule,
    DxPopupModule,
  ],
})
export class AuthModule {}
