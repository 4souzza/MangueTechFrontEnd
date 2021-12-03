import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "contato", component: ContatoComponent},
  { path: "inicio", component: InicioComponent },
  { path: "menu", component: MenuComponent },
  { path: "rodape", component: RodapeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }