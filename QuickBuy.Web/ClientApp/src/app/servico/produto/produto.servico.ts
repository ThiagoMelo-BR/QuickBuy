import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/produto";


@Injectable({
  providedIn: "root"
})
export class ProdutoServico {  
  private baseURL: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  buscarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + 'api/produto');
  }


}
