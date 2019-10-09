import { Component } from "@angular/core"
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";

@Component({
  selector: "app-listaproduto",
  templateUrl: "./listaproduto.component.html"

})
export class ListaProdutoComponent { //Padrão PascalCase
  public produtos: Produto[];

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.buscarProdutos().subscribe(
      result => {
        this.produtos = result;
      },
      e => {
        console.log(e.error);
      }
    )

  }
}
