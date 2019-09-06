import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {
  private baseURL: string;
  private _usuario: Usuario;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
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
    return (this._usuario != null && this.usuario.email != "" && this.usuario.senha != "");
  }

  limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this.usuario = null;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //this.baseURL = raiz do site
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarUsuario", body, { headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      sobreNome: usuario.sobreNome
    }

    return this.http.post<Usuario>(this.baseURL + "api/usuario", body, { headers });
  }

}
