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
  public mensagem: string;
  public ativar_spinner: boolean;

  constructor(private router: Router,
    private activateRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {
    //Boa prática deixar apenas os objetos que podem ser injetados
  }

  ngOnInit(): void {
    //Estudar mais sobre ciclo de vida de componentes em angular
    this.usuario = new Usuario();
    this.returnUrl = this.activateRouter.snapshot.queryParams["returnUrl"];
  }

  entrar(): void {
    this.ativar_spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      usuario_json => {
        this.usuarioServico.usuario = usuario_json;        
        if (this.returnUrl == null){
          this.router.navigate(['/']);         
        }
        else
          this.router.navigate([this.returnUrl]);

      },
      erro => {
        this.ativar_spinner = false;
        localStorage.setItem("usuario-autenticado", "");        
        this.mensagem = erro.error;
      }
    )   
  }

}
