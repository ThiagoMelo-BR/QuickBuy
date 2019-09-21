import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.componente.html",
  styleUrls: ["./produto.componente.css"]
})
export class ProdutoComponent implements OnInit {   

  public produto: Produto;

  constructor(private produtoServico: ProdutoServico) {   

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }
}


