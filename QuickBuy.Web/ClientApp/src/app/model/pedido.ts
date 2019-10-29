import { ItemPedido } from "./itempedido";

export class Pedido { 
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

  constructor() {
    this.dataPedido = new Date();
    this.dataPrevisaoEntrega = new Date();
    this.itensPedido = [];
  }
}

