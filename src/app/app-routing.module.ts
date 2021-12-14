import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "contato", component: ContatoComponent},
  { path: "inicio", component: InicioComponent },
  { path: "menu", component: MenuComponent },
  { path: "rodape", component: RodapeComponent },
  { path: "logar", component: LoginComponent},
  { path: "tema", component: TemaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }