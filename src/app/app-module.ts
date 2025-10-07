import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { FormsModule } from '@angular/forms';
import { Banner } from './banner/banner';
import { ProdutoComponent } from './produto-component/produto-component';
import { ProdutoDetalheComponent } from './detalhes-produto/detalhes-produto';
import { SobreNos } from './sobre-nos/sobre-nos';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Home,
    PaginaNaoEncontrada,
    Banner,
    ProdutoComponent,
    ProdutoDetalheComponent,
    SobreNos
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
