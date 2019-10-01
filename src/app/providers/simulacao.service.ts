import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimulacaoCompra } from '../models/simulacao';
import { Observable } from 'rxjs';
import { SettingsService } from '../core/settings/settings.service';
import { JsonMessage } from '../models/JsonMessage';
import { ParcelasCompra } from '../models/ParcelasCompra';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SimulacaoService {


  url: any;
  constructor(private http: HttpClient, private configuracao: SettingsService) {
    this.url = `${this.configuracao.getApiSetting("urlHomo")}/SimulacaoCompras`;
  }

  addSimulaco(simulacaoCompra: SimulacaoCompra): Observable<JsonMessage> {
    console.log(simulacaoCompra);
    return this.http.post<JsonMessage>(`${this.url}`, simulacaoCompra, httpOptions);
  }

  obterSolicitacoes(): Observable<SimulacaoCompra[]> {
    return this.http.get<SimulacaoCompra[]>(`${this.url}`);
  }

  obterParcelas(Id: number): Observable<ParcelasCompra[]> {
    return this.http.get<ParcelasCompra[]>(`${this.url}/${Id}`);
  }



}