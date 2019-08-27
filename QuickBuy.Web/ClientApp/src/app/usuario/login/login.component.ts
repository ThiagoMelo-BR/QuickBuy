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

  constructor(private router: Router) {
    this.usuario = new Usuario();
}

  entrar(): void {
    if (this.usuario.email == "thiago@123" && this.usuario.senha == "123") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate(["/"]);
    }
    else {
      localStorage.setItem("usuario-autenticado", "");
    }
  }

}
