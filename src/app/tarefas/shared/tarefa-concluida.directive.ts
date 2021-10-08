import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]' // criou uma propriedade 
})
export class TarefaConcluidaDirective implements OnInit{
@Input() tarefaConcluida : boolean; // recebendo a informação do html se a tarefa esta concluida ou não 


  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){ // se for verdadeiro 
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }

}
