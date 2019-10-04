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
  public ativar_spinner_imagem: boolean;
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {   

  }

  public cadastrarProduto() {
    this.ativar_spinner = true;
    this.produtoServico.cadastrar(this.produto).subscribe(
      retorno => {
        this.mensagem = "";
        this.produtoCadastrado = true;
        this.ativar_spinner = false;        
      },

      erro => {
        this.mensagem = erro.error;
        this.ativar_spinner = false;
      }
    )
  }

  public inputChange(files: FileList) {
    this.ativar_spinner_imagem = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      nomeArquivo => {
        this.produto.diretorioImagem = nomeArquivo;        
        console.log(nomeArquivo);
        this.ativar_spinner_imagem = false;
      },
      e => {
        console.log(e.error);
        this.ativar_spinner_imagem = false;
      }
    );
  }

  ngOnInit(): void {
    this.produto = new Produto();
  }
}


