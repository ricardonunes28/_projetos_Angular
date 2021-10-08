// arquivo onde tenho todas as minhas rotas
 import {NgModule} from '@angular/core';
 import {Routes, RouterModule} from '@angular/router'
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { jogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';
import { TarefaRoutes } from './tarefas';

 export const routes: Routes = [
     { // Array de Rotas aonde guardo todas as minhas rotas.
         path: '',
         redirectTo: '/dashboard',
         pathMatch: 'full'
     },
     ...DashboardRoutes,
     ...CalculadoraRoutes,
     ...TarefaRoutes,
     ...ConversorRoutes,
     ...jogoDaVelhaRoutes
     
       

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}