import { Pedido } from "./pedido";

export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  sobreNome: string;
  ehAdministrador: boolean;
  pedidos: Pedido[];
}
