import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor{

  OnTouched: any;
  OnChange: any;
  

  constructor(private el: ElementRef) { } // el representa o proprio imput da validação

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * 
   * @param $event 
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    const posDecimais = valor.indexOf('.');// procurar o que tenho após os decimais . 

    valor = valor.replace(/[\D]/g, '');// substitiu para não aceitar valores numericos!

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.OnChange(valor);
  }

   /**
   * Registra funcção a ser chamada para atualizar valor na model.
   *
   * @param any fn
   */
    registerOnChange(fn: any): void {
      this.OnChange = fn;
    }

    /**
   * Registrar função a ser chamada para atualizar valor na model para event touched
   *
   * @param any fn
   */
  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  /**
   * Obtem o valor contido no model 
   * 
   * @param value 
   */

  writeValue(value: any){
    this.el.nativeElement.value = value;
  }


}
