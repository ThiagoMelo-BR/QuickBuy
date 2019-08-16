import { Component } from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body>{{ getNome() }}</body></html>"
})
export class ProdutoComponent { //Padrão PascalCase
  public nome: string;

  //Padrão camelCase
  getNome(): string {
    return "Samsung";
  }
}
