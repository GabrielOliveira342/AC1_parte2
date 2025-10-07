import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { ProdutoComponent } from './produto-component/produto-component';
import { ProdutoDetalheComponent } from './detalhes-produto/detalhes-produto';
import { SobreNos } from './sobre-nos/sobre-nos';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {path : 'produto-component', component: ProdutoComponent},
  { path: 'detalhes-produto/:id', component: ProdutoDetalheComponent },
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'sobre-nos', component: SobreNos},
  { path: '**', component: PaginaNaoEncontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
