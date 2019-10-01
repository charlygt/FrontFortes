import { ParcelasCompra } from './ParcelasCompra';

export class SimulacaoCompra {
 Id:number;
 ValorCompra:number ;
 ValorJuros :number;
 QtdParcelas :number;
 DataCompra:Date; 
 ParcelasCompra: ParcelasCompra[];

 //juros simples
  getMontanteComposto(){
     return   (this.getValorParcela() * this.QtdParcelas).toFixed(2) ;
 }

 getValorParcela(){
   return (this.ValorCompra * Math.pow( (1+this.ObterJurosPercent()) ,this.QtdParcelas)  * this.ObterJurosPercent()) /
   (Math.pow( (1+this.ObterJurosPercent() ),this.QtdParcelas) - 1);
 };

 ObterJurosPercent(){
     return this.ValorJuros / 100;
 }
 ObterValorJurosMontante(){
   return parseFloat(this.getMontanteComposto()) - this.ValorCompra;
 }

 ObterValorJurosParcela(){
  return  (this.getValorParcela() -  (this.ValorCompra / this.QtdParcelas)).toFixed(2);
}

}