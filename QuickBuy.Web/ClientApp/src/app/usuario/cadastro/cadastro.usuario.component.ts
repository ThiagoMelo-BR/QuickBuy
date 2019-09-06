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

  constructor(private usuarioServico: UsuarioServico, private router: Router) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrarUsuario() {
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuarioJSON => {
          alert("Usuário cadastrado " + usuarioJSON.nome + " com sucesso!");
          this.router.navigate(["/login"]);
        },
        erro => {
          this.mensagem = erro.error;
        }
      );
      
  }

  

}
