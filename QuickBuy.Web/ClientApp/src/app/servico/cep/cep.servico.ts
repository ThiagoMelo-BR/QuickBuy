import { Inject, Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endereco } from "../../model/endereco";

@Injectable({
  providedIn: "root"
})
export class CepServico implements OnInit {

  private baseUrl: String = 'https://viacep.com.br/ws/';
  public endereco: Endereco;

  constructor(private http: HttpClient) {    
  }

  ngOnInit(): void {        
  }

  get headers() {
    return new HttpHeaders().set('content-type', 'application/json')
  }

  public buscarEndereco(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(this.baseUrl + cep + '/json', { headers: this.headers });
  }


}

