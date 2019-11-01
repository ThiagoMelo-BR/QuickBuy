import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";

@Component({
  selector: "confirmacao-pedido",
  templateUrl: "./confirmacao.pedido.component.html",
})
export class ConfirmacaoPedidoComponent implements OnInit {

  public pedido: Pedido;

  ngOnInit(): void {
    let pedidoRetorno = sessionStorage.getItem("pedidoRetorno");

    if (pedidoRetorno) {
      this.pedido = JSON.parse(pedidoRetorno); 
    }
       
  }
}
