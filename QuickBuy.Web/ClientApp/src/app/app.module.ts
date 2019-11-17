import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioServico } from './servico/usuario/usuario.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { ProdutoServico } from './servico/produto/produto.servico';
import { ListaProdutoComponent } from './produto/lista/listaproduto.component';
import { ProdutoComponent } from './produto/cadastro/produto.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { LojaProdutoComponent } from './loja/produto/loja.produto.component';
import { TruncateModule } from 'ng2-truncate';
import { LojaEfetivarComponent } from './loja/efetivar/loja.efetivar.component';
import { PedidoServico } from './servico/pedido/pedido.servico';
import { ConfirmacaoPedidoComponent } from './loja/confirmacao-pedido/confirmacao.pedido.component';
import { PedidosUsuarioComponent } from './usuario/pedidos/pedidos.usuario.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LojaEntregaComponent } from './loja/entrega/loja.entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    ProdutoComponent,
    CadastroUsuarioComponent,
    ListaProdutoComponent,
    LojaPesquisaComponent,
    LojaProdutoComponent,
    LojaEfetivarComponent,
    ConfirmacaoPedidoComponent,
    PedidosUsuarioComponent,
    LojaEntregaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },      
      { path: 'login', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroUsuarioComponent },
      { path: 'lista-produto', component: ListaProdutoComponent, canActivate: [GuardaRotas] },
      { path: 'loja-produto', component: LojaProdutoComponent  },
      { path: 'loja-efetivar', component: LojaEfetivarComponent },
      { path: 'confirmacao-pedido', component: ConfirmacaoPedidoComponent },
      { path: 'pedidos-usuario', component: PedidosUsuarioComponent },
      { path: 'loja-entrega', component: LojaEntregaComponent }
    ])
  ],
  providers: [UsuarioServico, ProdutoServico, PedidoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }
