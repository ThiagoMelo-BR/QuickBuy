import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activateRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
    //Boa prática deixar apenas os objetos que podem ser injetados
  }

  ngOnInit(): void {
    //Estudar mais sobre ciclo de vida de componentes em angular
    this.usuario = new Usuario();
    this.returnUrl = this.activateRouter.snapshot.queryParams["returnUrl"];
  }

  entrar(): void {

    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      data => {

      },
      erro => {

      }
    )

    if (this.usuario.email == "thiago@123" && this.usuario.senha == "123") {
      sessionStorage.setItem("usuario-autenticado", "1");                  
      this.router.navigate([this.returnUrl]);     
    }
    else {
      localStorage.setItem("usuario-autenticado", "");
    }
  }

}
