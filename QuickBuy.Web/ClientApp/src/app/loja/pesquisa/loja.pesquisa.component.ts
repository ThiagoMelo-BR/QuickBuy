import { Component, OnInit } from "@angular/core"
import { Produto } from "../../model/produto";
import { ProdutoServico } from "../../servico/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {
  public produtos: Produto[];

    ngOnInit(): void {
 
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.buscarProdutos().subscribe(
      listaProdutos => {
        this.produtos = listaProdutos;
      },
      e => {
        console.log(e.error);
      }
    );    
  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoEdicao', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }

}
