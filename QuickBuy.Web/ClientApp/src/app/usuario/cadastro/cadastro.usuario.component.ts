import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";
import { Router } from "@angular/router";


@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public mensagem: string;
  public ativar_spinner: boolean;
  public usuarioCadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico, private router: Router) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrarUsuario() {
    this.ativar_spinner = true;
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuarioJSON => {
          this.mensagem = "";
          this.usuarioCadastrado = true;
          this.ativar_spinner = false;
        },
        erro => {
          this.mensagem = erro.error;
          this.ativar_spinner = false;
        }
      );
      
  }

  

}
