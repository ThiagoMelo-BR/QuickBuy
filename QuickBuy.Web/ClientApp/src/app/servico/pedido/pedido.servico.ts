import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Pedido } from "../../model/pedido";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PedidoServico {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get headers() {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public efetivarVenda(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this._baseUrl + "api/pedido/EfetivarPedido", JSON.stringify(pedido), { headers: this.headers });
  }
}
