import { Component, OnInit } from "@angular/core";
import { Pedido } from "../model/pedido";
import { Router } from "@angular/router"

@Component({
  selector: "app-detalhes-pedido",
  templateUrl: "./detalhes.pedido.component.html"
})

export class DetalhesPedidoComponent implements OnInit {
  public pedido: Pedido;

  ngOnInit(): void {    
    let pedidoRetorno = sessionStorage.getItem('pedidoDetalhes');

    if (pedidoRetorno) {
      this.pedido = JSON.parse(pedidoRetorno);      
    }    
  }

  constructor(private router: Router) { 

  }
}
