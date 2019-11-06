import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";
import { Pedido } from "../../model/pedido";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {
  private baseURL: string;
  private _usuario: Usuario;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {    
    this.baseURL = baseUrl;
  }

  get headers() {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);    
    return this._usuario;
  }

  usuario_autenticado(): boolean {
    return (this._usuario != null && this._usuario.email != "" && this._usuario.senha != "");    
  }

  usuario_EhAdministrador(): boolean {
    return this.usuario_autenticado() && this._usuario.ehAdministrador;
}

  limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this.usuario = null;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    //this.baseURL = raiz do site
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarUsuario", JSON.stringify(usuario), { headers: this.headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseURL + "api/usuario/cadastrar", JSON.stringify(usuario), {headers: this.headers});
  }

  public temPedidosUsuario() {
    if (this.usuario_autenticado()) {
      return this.usuario.pedidos.length > 0;
    }
  }

  public atualizarPedidoLista(pedido: Pedido) {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    this._usuario.pedidos.push(pedido);
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(this._usuario));
  }   
  
}
