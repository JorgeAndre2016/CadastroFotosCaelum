import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFotoComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpClientModule,
    roteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
