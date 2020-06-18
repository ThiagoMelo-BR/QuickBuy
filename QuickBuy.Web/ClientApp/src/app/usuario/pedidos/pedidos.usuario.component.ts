import { Component, OnInit } from "@angular/core"
import { Pedido } from "../../model/pedido";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { PedidoServico } from "../../servico/pedido/pedido.servico";
import { Router } from "@angular/router";

@Component({
  selector: "pedidos-usuario",
  templateUrl: "./pedidos.usuario.component.html",
  styleUrls: ["./pedidos.usuario.component.css"]
})

export class PedidosUsuarioComponent implements OnInit {

  public pedidos: Pedido[];
  public paginaAtual = 1;

  constructor(private pedidoServico: PedidoServico,
    private usuarioServico: UsuarioServico, private router: Router) {

  }

  ngOnInit(): void {    
    this.pedidoServico.pedidosPorUsuario(this.usuarioServico.usuario.id).subscribe(
      retorno => {        
        this.pedidos = retorno;
      },
      erro => {
        alert(erro.error);
      }
    );
  }



  public detalharPedido(pedido: Pedido) {
    sessionStorage.setItem('pedidoDetalhes', JSON.stringify(pedido));    
    this.router.navigate(['/detalhes-pedido']);
  }

}
