import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes.service';
import { CarrosComponent } from './carros/carros.component';
import { ViagensComponent } from './viagens/viagens.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CarrosComponent,
    ViagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ClientesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
