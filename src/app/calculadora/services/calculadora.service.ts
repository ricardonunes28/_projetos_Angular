/** 
*Serviço responsavel por executar as operações da calculadora.
*
*@autor Ricardo Nunes <ricardonascimentosp138@gmail.com>
*@since 1.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
/* DEFININDO AS CONSTANTES UTILIZADAS PARA INDENTIFICAR AS OPERAÇÕES DE CALCULO. */
  static readonly SOMA: String = '+';
  static readonly SUBTRACAO: String = '-';
  static readonly DIVISAO: String = '/';
  static readonly MULTIPLICACAO: String = '*';


  constructor() { }
/**
 * Metodo que calcula uma operação matematica dado 
 * dois numeros e uam operação.
 * Suporta as operações de soma,subtração, divisão e multiplicação
 * @param num1 number
 * @param num2 number
 * @param operacao string operação a ser executada
 * @returns number Resultado da minhas operações
 */

  calcular(num1: number, num2: number, operacao:String): number {
    let resultado: number
    
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado =0;
      break;
    }
    return resultado;
  }
  
}
