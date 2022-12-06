import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarImcComponent } from './pages/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './pages/imc/listar-imc/listar-imc.component';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [{
  path: "pages/usuario/cadastrar",
  component: CadastrarUsuarioComponent,
},
{
  path: "pages/imc/cadastrar",
  component: CadastrarImcComponent,
},
{
  path: "pages/imc/cadastrar/:id",
  component: CadastrarImcComponent,
},
{
  path: "pages/imc/listar",
  component: ListarImcComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
