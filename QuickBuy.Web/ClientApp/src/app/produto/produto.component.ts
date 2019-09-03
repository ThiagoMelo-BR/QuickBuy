import { Component } from "@angular/core"
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.componente.html"
  
})
export class ProdutoComponent { //Padrão PascalCase
  public produtos: Produto[];

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.buscarProdutos().subscribe(
      result=> {
        this.produtos = result;
      },
      error => {
        console.log(error.erro);
      }    
  )

  }
}


