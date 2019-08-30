import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioServico } from "../servico/usuario/usuario.servico";

@Injectable({
  providedIn: "root"
})
export class GuardaRotas implements CanActivate {

  //Vai ser injetado via injeção de dependência do RouterModule
  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.usuarioServico.usuario_autenticado()) {      
      return true;
    }
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
    }

}
