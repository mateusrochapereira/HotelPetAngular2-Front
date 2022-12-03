import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NovoUsuarioComponent} from "./components/usuario/novo-usuario/novo-usuario.component";
import {LoginComponent} from "./components/login/login.component";
import {EsqueceuASenhaComponent} from "./components/esqueceu-a-senha/esqueceu-a-senha.component";
import {HomeComponent} from "./components/home/home.component";
import {NovoCuidadorComponent} from "./components/cuidador/novo-cuidador/novo-cuidador.component";

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'novoUsuario', component: NovoUsuarioComponent},
  {path: 'esqueceuSenha', component: EsqueceuASenhaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'novoCuidador', component: NovoCuidadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
