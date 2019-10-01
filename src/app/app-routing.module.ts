import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaSimulacaoComponent } from './components/nova-simulacao/nova-simulacao.component';
import { ListaSimulacaoComponent } from './components/lista-simulacao/lista-simulacao.component';

const routes: Routes = [
  { path : '',component:NovaSimulacaoComponent},
   {path : 'simulacoes',component:ListaSimulacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
