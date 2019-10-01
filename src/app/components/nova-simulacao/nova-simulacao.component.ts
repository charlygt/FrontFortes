import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {  SimulacaoCompra } from 'src/app/models/simulacao';
import { ParcelasCompra } from 'src/app/models/ParcelasCompra';
import { registerLocaleData, DatePipe } from '@angular/common';
import { SimulacaoService } from 'src/app/providers/simulacao.service';
import ptBr from '@angular/common/locales/pt';
import Swal from 'sweetalert2'
registerLocaleData(ptBr);

@Component({
  selector: 'app-nova-simulacao',
  templateUrl: './nova-simulacao.component.html',
  styleUrls: ['./nova-simulacao.component.css'], 
  providers: [ SimulacaoService, { provide: LOCALE_ID, useValue: 'pt-PT' }]
})
export class NovaSimulacaoComponent implements OnInit {

  simulacao: SimulacaoCompra;
  erros: string[];
  parcelas: ParcelasCompra[];
  showSimulacao =false;

  pipe = new DatePipe('pt');

  constructor(private serviceSimulacao: SimulacaoService) { }

  ngOnInit() {
    this.simulacao = new SimulacaoCompra();
this.showSimulacao = false;
  }

  simular() {
    if (this.validarSimulacao(this.simulacao)) {
        this.gerarParcelas(this.simulacao);
      }
     console.log(this.simulacao.getValorParcela());
  }

  gerarParcelas(simulacao: SimulacaoCompra) {
    this.parcelas = [];    
   
    for (let i = 1; i <= simulacao.QtdParcelas; i++) {
        let parcela = new ParcelasCompra();
        // dataAux.setDate(dataVencimentoAnt.getDate() + 30);
        parcela.DataVencimento = new Date(simulacao.DataCompra);
        parcela.DataVencimento.setMonth(new Date(simulacao.DataCompra).getMonth() + i);
        parcela.Parcela = i;
        parcela.ValorParcela = parseFloat(simulacao.getValorParcela().toFixed(2));
  
        this.parcelas.push(parcela);

    }
    this.simulacao.ParcelasCompra = this.parcelas;
    this.showSimulacao = true;
  }



  validarSimulacao(simulacao: SimulacaoCompra): boolean {
    this.erros = [];
    if (!simulacao.ValorCompra) this.erros.push("Informe o Valor da Compra para ");

    if (!simulacao.DataCompra) this.erros.push("Informe a Data da Compra");

    if (!simulacao.QtdParcelas) this.erros.push("Informe a quantidade de Parcelas");
    else if (simulacao.QtdParcelas == 0) this.erros.push("Quantidade de Parcelas deve ser maior que 0");

    if (!simulacao.ValorJuros) this.erros.push("Informe o Valor da Compra para");

    if (this.erros.length > 0) return false;

    return true;
  }

  salvarSimulacao(){
    console.log(this.simulacao);
    this.serviceSimulacao.addSimulaco(this.simulacao)
    .subscribe(x => {
      console.log(x.type);
      if (x.type == 'success') {
        console.log("Sucesso");
        Swal.fire(x.title, x.message, 'success');
        
      } else if (x.type == 'warning') {
        console.log("Warning");
        Swal.fire(x.title, x.message, 'warning');
      } else if (x.type == 'error') {
        console.log("Error");
        Swal.fire(x.title, x.message, 'error');
      }

      this.ngOnInit();
    });
  }

}
