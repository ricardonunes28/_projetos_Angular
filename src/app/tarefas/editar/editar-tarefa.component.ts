import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'

import { TarefaService, Tarefa } from '../shared';


@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', {static:true})formTarefa: NgForm // Criando uma referencia de dentro do html, para trabalhar com as validações.
  tarefa:Tarefa;


  constructor( 
    private tarefaService: TarefaService,
    private route: ActivatedRoute, // seria como o params  PACOTE QUE CONTENHA O SNAOSHOT QUE FAZ CAPTURAR O PARAMETRO DA ROTA
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // AQUI ESTAMOS UTILIZANDO O PACOTE ACTIVATEDROUTE. + converte para id para numero 
    this.tarefa = this.tarefaService.buscarPorId(id);// o id é o da const, aqui dentro já tem a tarefa que deso editar 

  }

  atualizar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa); // se validado posso atualizar o id encontrado que foi guardado em this. tarefa
      this.router.navigate(['/tarefas']); // aqui faz navegar ateé a rota de tarefas 
    }
  }
}
