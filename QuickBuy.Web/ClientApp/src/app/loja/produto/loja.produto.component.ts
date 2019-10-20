import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servico/produto/produto.servico";
import { Produto } from "../../model/produto";

@Component({
  selector: "app-loja-produto",
  templateUrl: "/loja.produto.component.html",
  styleUrls: ["/loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {
  public produto: Produto;
  ngOnInit(): void {
    var produtoDetalhe = sessionStorage.getItem('produtoEdicao');

    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
    else {
      console.log("Erro ao detalhar produto!");
    }
  }

  constructor(private produtoServico: ProdutoServico) {

  }
}
