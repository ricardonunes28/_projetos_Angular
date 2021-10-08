import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../service';

import { ConversaoResponse, Conversao } from '../models';



@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>() //emitindo sinais, dando noticias para o elemento pai.(propagador de eventos)

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta(){
    this.onConfirm.emit();// emitir uma nova consulta
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2)
    // pegando o valor da conversão multiplica pela taxa de conversão(resposta) toFixed(vai retornar apenas duas casas)
  }

  get cotacaoPara(): number{
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }


}
