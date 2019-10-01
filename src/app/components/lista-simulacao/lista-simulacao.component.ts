import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { SimulacaoCompra } from 'src/app/models/simulacao';
import { SimulacaoService } from 'src/app/providers/simulacao.service';
import { ParcelasCompra } from 'src/app/models/ParcelasCompra';

@Component({
  selector: 'app-lista-simulacao',
  templateUrl: './lista-simulacao.component.html',
  styleUrls: ['./lista-simulacao.component.css'],
  providers: [SimulacaoService, { provide: LOCALE_ID, useValue: 'pt-PT' }]
})
export class ListaSimulacaoComponent implements OnInit {

  listaSimulacao: SimulacaoCompra[];
  parcelas: ParcelasCompra[];
  constructor(private serviceSimulacao: SimulacaoService) { }

  ngOnInit() {
    this.ObterSimulacoes();
    this.parcelas = [];
  }

  ObterSimulacoes() {
    this.serviceSimulacao.obterSolicitacoes()
        .subscribe(simulacoes => this.listaSimulacao = simulacoes);
  }

  // obtendo parcelas da simulação
  detalhes(modal: any, id: number): void {
    this.serviceSimulacao.obterParcelas(id)
      .subscribe(parcelas => {
        this.parcelas = parcelas
        modal.show();
      });

  }

  getTotalParcela(lista: any): number {
    return lista.reduce((total, p) => p.valorParcela + total, 0);
  }

}
