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
  public mensagem: string;
  public produtoCadastrado: boolean;
  public ativar_spinner: boolean;
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {   

  }

  public cadastrarProduto() {
    this.ativar_spinner = true;
    this.produtoServico.cadastrar(this.produto).subscribe(
      retorno => {        
        this.produtoCadastrado = true;
        this.ativar_spinner = false;
        this.limparDadosProduto();
      },

      erro => {
        this.mensagem = erro.error;
        this.ativar_spinner = false;
      }
    )
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      retorno => {
        console.log(retorno);
      },
      e => {
        console.log(e.error);
      }
    );
  }

  private limparDadosProduto() {
    this.produto.nome = "";
    this.produto.descricao = "";
    this.produto.preco = 0;
  }

  ngOnInit(): void {
    this.produto = new Produto();
  }
}


