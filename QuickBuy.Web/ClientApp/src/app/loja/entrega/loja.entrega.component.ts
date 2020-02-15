import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";
import { PedidoServico } from "../../servico/pedido/pedido.servico";
import { Router } from "@angular/router";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";
import { Endereco } from "../../model/endereco";
import { CepServico } from "../../servico/cep/cep.servico";

@Component({
  selector: "loja-entrega",
  templateUrl: "./loja.entrega.component.html",
  styleUrls: ["./loja.entrega.component.css"]
})

export class LojaEntregaComponent implements OnInit {
  public pedido: Pedido;
  public endereco: Endereco;
  public carrinhoCompras: LojaCarrinhoCompras;

  constructor(private pedidoServico: PedidoServico, private router: Router,
    private usuarioServico: UsuarioServico, private cepServico: CepServico) {

  }

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();    

    let pedidoRetorno = sessionStorage.getItem("pedidoDigitacao");

    if (pedidoRetorno) {
      this.pedido = JSON.parse(pedidoRetorno);
    }        
  }

  public buscarEndereco(cep: string) {
    this.cepServico.buscarEndereco(cep).subscribe(
      endereco => {
        if (endereco.uf != null) {
          this.pedido.endereco = endereco.logradouro + ' ' + endereco.bairro;
          this.pedido.cidade = endereco.localidade;
          this.pedido.uf = endereco.uf;
        }
        else {
          this.pedido.endereco = '';
          this.pedido.cidade = '';
          this.pedido.uf = '';
          alert('Cep não encontrado!');
        }

      },
      e => {
        console.log(e.error);
      }
    )
  }

  public efetivarVenda() {   

    this.pedidoServico.efetivarVenda(this.pedido).subscribe(
      pedido => {
        this.carrinhoCompras.limparCarrinho();
        sessionStorage.setItem("pedidoRetorno", JSON.stringify(pedido));
        this.usuarioServico.atualizarPedidoLista(pedido);
        this.router.navigate(['/confirmacao-pedido']);
      },
      e => {
        console.log(e.error);
      }
    )
  }

}
