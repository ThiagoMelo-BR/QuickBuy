import { Component } from "@angular/core"
import { Produto } from "../../model/produto";
import { ProdutoServico } from "../../servico/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-listaproduto",
  templateUrl: "./listaproduto.component.html"

})
export class ListaProdutoComponent { //Padrão PascalCase
  public produtos: Produto[];

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.buscarProdutos().subscribe(
      result => {
        this.produtos = result;
      },
      e => {
        console.log(e.error);
      }
    )
  }

  public cadastrarProduto() {
    sessionStorage.setItem("produtoEdicao", "");
    this.router.navigate(['/produto'])
  }

  public excluirProduto(produto: Produto) {
    let confirmacao = confirm("Deseja realmente excluir o produto?");

    if (confirmacao == true) {
      this.produtoServico.deletar(produto).subscribe(
        sucesso => {
          this.produtos = sucesso;
        },
        erro => {
          console.log(erro.error);
        }
      );
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem("produtoEdicao", JSON.stringify(produto));
    this.router.navigate(["/produto"]);
  }
}
