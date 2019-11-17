import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servico/produto/produto.servico";
import { Produto } from "../../model/produto";
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
  selector: "app-loja-produto",
  templateUrl: "./loja.produto.component.html"
})

export class LojaProdutoComponent implements OnInit {
  public produto: Produto;
  public carrinhoCompras: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();

    var produtoDetalhe = sessionStorage.getItem('produtoEdicao');

    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
    else {
      console.log("Erro ao detalhar produto!");
    }
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  public comprar() {
    this.carrinhoCompras.adicionar(this.produto);
    this.router.navigate(['/loja-efetivar']);
  }

  public continuarComprando() {
    this.router.navigate(['/']);
  }
}
