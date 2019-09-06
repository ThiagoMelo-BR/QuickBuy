import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";


@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public mensagem: string;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrarUsuario() {
    alert("Nome: " + this.usuario.nome +
      "Email: " + this.usuario.email +
      "Senha: " + this.usuario.senha +
      "Sobre Nome: " + this.usuario.sobreNome);
    /*
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuarioJSON => {
          console.log("Usuario salvo com sucesso!" + usuarioJSON.nome);
        },
        erro => {
          console.log(erro.error);
        }
      );
      */
  }

  

}
