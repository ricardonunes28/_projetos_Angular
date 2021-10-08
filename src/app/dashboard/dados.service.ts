import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  /**
   * Varios dados dentro de um array 
   */
  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro',68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ] 

  constructor() { }


  /**
   * Criando metodo para obtenção de dados , local aonde crio meu Observable 
   */

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados); // next notifica quando um novo dado esta disponivel para ser disponibilizado!
      observable.complete(); // Enquanto tem dados na fila para processar ele vai atuar, se não tiver o complete(), ele vai sinalizar que acabou, que não tem necessidade de ficar escutando;
    })
  }
}
