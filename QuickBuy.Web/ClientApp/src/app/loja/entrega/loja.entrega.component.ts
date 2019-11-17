import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";
import { PedidoServico } from "../../servico/pedido/pedido.servico";
import { Router } from "@angular/router";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
  selector: "loja-entrega",
  templateUrl: "./loja.entrega.component.html",
  styleUrls: ["./loja.entrega.component.css"]
})

export class LojaEntregaComponent implements OnInit {
  public pedido: Pedido;
  public carrinhoCompras: LojaCarrinhoCompras;

  constructor(private pedidoServico: PedidoServico, private router: Router, private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();    

    let pedidoRetorno = sessionStorage.getItem("pedidoDigitacao");

    if (pedidoRetorno) {
      this.pedido = JSON.parse(pedidoRetorno);
    }
        
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
