import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { DashboardModule } from './dashboard';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    TarefasModule,
    ConversorModule,
    JogoDaVelhaModule,
    
    AppRoutingModule // Nesse app.module, aonde vamos fazer a importação de todos os modutos // AppRoutingModule deve ficar por ultimo.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
