
import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';

declare var google: any; // declarando a variavel aqui forçando que ela é global(utilizando o declare);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any; // dados

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados =>{ // objeto de controle, vai percorrer dados .
        this.dados = dados;
        this.init();
      }
    )
  }

  /**
   * fazendo uma solicitação para API
   * Inicializa com 1 segundo
   */

   init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
      	google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
   
  }
  

  exibirPieChart(): void{
    const el = document.getElementById('pie_chart')
    const chart = new google.visualization.PieChart(el); //visualization.PieChart são da API
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe nosso grafico no modo 3D 
   *
   * @return void
   */

  exibir3dPieChart(): void{
    const el = document.getElementById('3d_pie_chart')
    const chart = new google.visualization.PieChart(el); //visualization.PieChart são da API

    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true; // habilitando o meu grafico a opção 3d dela. 
    
    chart.draw(this.obterDataTable(),opcoes);
  }

  /**
   * Exibe nosso gráfico Donut Chart.
   *
   * @return void
   */
   exibirDonutChart(): void {
  	const el = document.getElementById('donut_chart');
  	const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4; // determinando o tamanho do "buraco do grafico";
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe nosso gráfico Bar Chart.
   *
   * @return void
   */
   exibirBarChart(): void {
  	const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe nosso gráfico Line Chart.
   *
   * @return void
   */
   exibirLineChart(): void {
  	const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe nosso gráfico Column Chart.
   *
   * @return void
   */
   exibirColumnChart(): void {
  	const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }




  obterDataTable(): any {
  	const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * 
   * @returns Retorna as opções de grafico , que incluem o  titulo 
   */

  obterOpcoes(): any {
  	return {
    	'title': 'Quantidade de cadastros primeiro semestre',
        'width': 400,
        'height': 300
    };
  }
}
