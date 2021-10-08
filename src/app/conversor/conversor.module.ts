import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './utils';
import { NumeroDirective } from './directives';
import { DataBrPipe } from './pipes/data-br.pipe';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalCotacaoComponent,
    NumeroDirective,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
