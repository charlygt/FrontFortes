import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulacaoComponent } from './components/simulacao/simulacao.component';
import { NovaSimulacaoComponent } from './components/nova-simulacao/nova-simulacao.component';
import { ListaSimulacaoComponent } from './components/lista-simulacao/lista-simulacao.component';
import { InputMoneyDirective } from './directives/input-money.directive';
import { HttpClientModule } from '@angular/common/http'; 
import { SettingsService } from './core/settings/settings.service';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';






@NgModule({
  declarations: [
    AppComponent,
    SimulacaoComponent,
    NovaSimulacaoComponent,
    ListaSimulacaoComponent,
    InputMoneyDirective,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot()
    
       
       
  ],

  providers: [SettingsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
