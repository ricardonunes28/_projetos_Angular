import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model'; // importação de modulos de tarefas em tarefa.model

// Parte logica de minha tarefa

@Injectable()
export class TarefaService { 

  constructor() { } // minha tarefa esta sendo constrida em tarefa.model.ts

  
  listarTodos(): Tarefa[]{ //indicando o tipo.
    const tarefas = localStorage['tarefas']; // local que esta sendo salvo, após fazendo verificação 
    return tarefas ? JSON.parse(tarefas): []; //armazenado com string para object

  }

  cadastrar(tarefa: Tarefa): void{ // passando para o metodo cadastrar, o que eu quero cadastrar !
    const tarefas = this.listarTodos(); // pegando todos os elemntos cadastrados e colocamos em const tarefas.
    tarefa.id = new Date().getTime(); // pegando a data real, para considerar aquele id como unico 
    tarefas.push(tarefa); // empilhamento das tarefas
    localStorage['tarefas'] = JSON.stringify(tarefas) // transformando de string para object novamente
  }

  //editando
  buscarPorId(id: number): Tarefa{ // buscando por id
    const tarefas : Tarefa[] = this.listarTodos(); // verificando na lista de tarefas
    return tarefas.find(tarefa => tarefa.id === id); 
  }

  //Salvar edição
  atualizar(tarefa: Tarefa): void{ // passando a tarefa
    const tarefas : Tarefa[] = this.listarTodos(); // todas as tarefas existentes
    tarefas.forEach((obj,index,objs)=>{ // verificando se tenho uma tarefa referente ao um terminado id
      if (tarefa.id === obj.id){
        objs[index] = tarefa;//  vai armazenar dentro de uma array
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); // minha lista de tarefas , foi atualizada.
  }

  // apagar 'd
  // a,b,c,d
  // o que for diferente vai passar para o array
  // a, b, c , o 'd não entra, filtrando.

  remover(id: number):void{
    let tarefas : Tarefa[] = this.listarTodos(); // verifico todos os elementos cadastrados
    tarefas = tarefas.filter(tarefa => tarefa.id !== id); // faço um filtro diferente do que eu quero apagar
    localStorage['tarefas'] = JSON.stringify(tarefas); // agora tenho atualizado sem o d do exemplo acima 
  }
  
  // marcando se esta concluido não 
  // 
  alterarStatus(id: number): void{
    const tarefas : Tarefa[] = this.listarTodos(); // verificação em todas as tarefas
    tarefas.forEach((obj, index, objs)=>{
      if (id === obj.id){ // inverto o valor que ele já tem, se ja vem com falsa e ticar, ela se transforma em verdadeira 
        objs[index].concluida = !obj.concluida; //apenas alterando o status
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
