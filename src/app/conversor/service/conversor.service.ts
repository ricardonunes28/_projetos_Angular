import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { ConversaoResponse, Conversao } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ConversorService {


  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=deaec7406d13d58ce7a18b96d71b9405"; // Chave de acesso para usar a aplicação de conversor .

  constructor(private http: HttpClient) { }

  /**
   * Realizar a chamada para Api de conversão de moedas.
   * 
   *  @param Conversao conversao
   *  @return Observable<ConversaoResponse>
   */

  converter(conversao: Conversao):Observable<any> {
    let params =  `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
      .get(this.BASE_URL + params);
  
  }

  /**
   * Retornar a cotação para um dado de reposta(response)
   * 
   * @param conversaoResponse 
   * @param conversao 
   * @returns 
   */
  cotacaoPara(conversaoResponse: ConversaoResponse,
    conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retornar a cotação para um dado de reposta(response)
   * 
   * @param conversaoResponse 
   * @param conversao 
   * @returns 
   */

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string{
    if (conversaoResponse === undefined){
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara])
    .toFixed(4);
  }
  /**
   * Retorna a data da cotação para um dado uma resposta(response)
   * 
   * 
   * @param conversaoResponse 
   * @returns 
   */

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }
  
}





