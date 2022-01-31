import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LanguageService } from './@core/services/languageService';
import { LayoutModule } from './@ui/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleActividadModule } from './detalle-actividad/detalle-actividad.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    DetalleActividadModule,
  ],
  providers: [LanguageService, { provide: LOCALE_ID, useValue: 'es-*' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
