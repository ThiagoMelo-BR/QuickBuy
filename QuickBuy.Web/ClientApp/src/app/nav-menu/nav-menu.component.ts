import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servico/usuario/usuario.servico';
import { LojaCarrinhoCompras } from '../loja/carrinho-compras/loja.carrinho.compras';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  public lojaCarrinho: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.lojaCarrinho = new LojaCarrinhoCompras();    
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {
    return this.usuarioServico.usuario_autenticado();
  }

  public sair() {
    this.usuarioServico.limpar_sessao();
    this.router.navigate(["/"]);
  }

  get usuario() {
    return this.usuarioServico.usuario;
  }

  public usuarioEhAdministrador() {
    return this.usuarioServico.usuario_EhAdministrador();
  }

  public temItensNoCarrinho() {
    return this.lojaCarrinho.temItensNoCarrinho();
  }

  public temPedidosUsuario() {
    return this.usuarioServico.temPedidosUsuario();
  }
}
