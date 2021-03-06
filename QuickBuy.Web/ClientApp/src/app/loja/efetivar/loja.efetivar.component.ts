import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";
import { Produto } from "../../model/produto";
import { Pedido } from "../../model/pedido";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { ItemPedido } from "../../model/itempedido";
import { PedidoServico } from "../../servico/pedido/pedido.servico";


@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {

  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;

  constructor(private router: Router, private usuarioServico: UsuarioServico,
              private pedidoServico: PedidoServico) {

  }

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.totalPedido();
  }

  public atualizarQuantidade(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }

    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal;
    this.carrinhoCompras.atualizar(this.produtos);
    this.totalPedido();
  }

  public removerProduto(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.totalPedido();

    //Direcionar para tela principal caso não exista mais itens no pedido
    if (this.produtos.length <= 0) {
      this.router.navigate(['/']);
    }
  }

  public totalPedido() {
    this.total = this.produtos.reduce((total, produto) => total + (produto.quantidade * produto.preco), 0);
  }

  public dadosParaEntrega() {

    if (this.usuarioServico.usuario == null) {
      alert("Para efetivar uma venda é necessário estar logado no sistema!");
      this.router.navigate(['/login']);
      return;
    }    

    let pedidoRetorno = sessionStorage.getItem("pedidoDigitacao");

    let pedido = new Pedido();

    if (pedidoRetorno) {
      pedido = JSON.parse(pedidoRetorno);
    }
    else {
      pedido = this.criarPedido();
      sessionStorage.setItem("pedidoDigitacao", JSON.stringify(pedido));
    }

        
    this.router.navigate(['/loja-entrega']);
    
  }

  public criarPedido(): Pedido{
    let pedido = new Pedido();
    pedido.formaPagamentoId = 1;
    pedido.usuarioId = this.usuarioServico.usuario.id;

    this.produtos = this.carrinhoCompras.obterProdutos();  

    for (let p of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = p.id;
      itemPedido.quantidade = p.quantidade;
      itemPedido.preco = p.preco;
      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }
}
