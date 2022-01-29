import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
