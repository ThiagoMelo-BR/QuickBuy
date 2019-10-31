import { ItemPedido } from "./itempedido";

export class Pedido {
  id: number;
  usuarioId: number;
  formaPagamentoId: number;
  dataPedido: Date;
  dataPrevisaoEntrega: Date;
  cep: string;
  cidade: string;
  uf: string;
  endereco: string;
  numeroEndereco: string;
  itensPedido: ItemPedido[];
  total: number;

  constructor() {
    this.dataPedido = new Date();
    this.dataPrevisaoEntrega = new Date();
    this.itensPedido = [];
  }
}


    

  

        

       


