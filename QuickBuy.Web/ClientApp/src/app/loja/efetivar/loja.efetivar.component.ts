import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";
import { Produto } from "../../model/produto";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {

  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.totalPedido();
  }

  constructor(private router: Router) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.totalPedido();
  }

  public removerProduto(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.totalPedido();
  }

  public totalPedido() {
    this.total = this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  

}
