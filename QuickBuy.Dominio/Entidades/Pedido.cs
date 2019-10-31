using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }

        public int UsuarioId { get; set; }

        public virtual Usuario Usuario { get; set; }

        public int FormaPagamentoId { get; set; }

        public virtual FormaPagamento FormaPagamento { get; set; }

        public DateTime DataPedido { get; set; }

        public virtual ICollection<ItemPedido> ItensPedido { get; set; }

        public DateTime DataPrevisaoEntrega { get; set; }

        public string CEP { get; set; }

        public string Cidade { get; set; }
        
        public string UF { get; set; }

        public string Endereco { get; set; }

        public string NumeroEndereco { get; set; }

        public decimal Total => ItensPedido.Sum(i => i.Quantidade * i.Preco);

        public override void Validate()
        {
            LimparLista();

            if (!ItensPedido.Any())            
                AdicionarCritica("Erro: Pedido sem itens válidos");

            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Erro: O campo CEP deve ser preenchido");
        }
    }
}
