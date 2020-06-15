import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { Router } from "@angular/router";

@Component({
  selector: "pedidos-usuario",
  templateUrl: "./pedidos.usuario.component.html",
  styleUrls: ["./pedidos.usuario.component.css"]
})

export class PedidosUsuarioComponent implements OnInit {

  public pedidos: Pedido[];
  public paginaAtual = 1;

  ngOnInit(): void {
    this.pedidos = this.usuarioServico.usuario.pedidos;
  }

  constructor(private usuarioServico: UsuarioServico, private router: Router) {
    
  }

  public detalharPedido(pedido: Pedido) {
    sessionStorage.setItem('pedidoDetalhes', JSON.stringify(pedido));
    alert(JSON.stringify(pedido));
    this.router.navigate(['/detalhes-pedido']);
  }

}
