import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";

@Component({
  selector: "confirmacao-pedido",
  templateUrl: "./confirmacao.pedido.component.html",
})
export class ConfirmacaoPedidoComponent implements OnInit {

  public pedidoId: string;

  ngOnInit(): void {
    this.pedidoId = sessionStorage.getItem("pedidoId");    
  }
}
