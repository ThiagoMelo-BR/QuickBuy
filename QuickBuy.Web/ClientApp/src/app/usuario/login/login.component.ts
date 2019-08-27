import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent{
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["thiago", "rosi", "ana clara", "iolanda"];

  constructor(private router: Router) {
    this.usuario = new Usuario();
}

  entrar(): void {
    if (this.usuario.email == "thiago@123" && this.usuario.senha == "123") {
      localStorage.setItem("usuario-autenticado", "1");
      this.router.navigate(["/"]);
    }
    else {
      localStorage.setItem("usuario-autenticado", "2");
    }
  }

}
