import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent{
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["thiago", "rosi", "ana clara", "iolanda"];

  constructor() {
    this.usuario = new Usuario();
}

  entrar(): void {
    if (this.usuario.email == "thiago@123" && this.usuario.senha == "123") {
      this.usuarioAutenticado = true;
    }
    else
      this.usuarioAutenticado = false;
  }

}
