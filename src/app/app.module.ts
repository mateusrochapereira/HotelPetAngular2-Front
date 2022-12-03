import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NovoUsuarioComponent } from './components/usuario/novo-usuario/novo-usuario.component';
import { EsqueceuASenhaComponent } from './components/esqueceu-a-senha/esqueceu-a-senha.component';
import { HomeComponent } from './components/home/home.component';
import { CuidadorComponent } from './components/cuidador/cuidador.component';
import { NovoCuidadorComponent } from './components/cuidador/novo-cuidador/novo-cuidador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    NovoUsuarioComponent,
    EsqueceuASenhaComponent,
    HomeComponent,
    CuidadorComponent,
    NovoCuidadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
