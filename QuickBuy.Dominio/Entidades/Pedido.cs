using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }

        public int UsuarioId { get; set; }

        public int FormaPagamentoId { get; set; }

        public FormaPagamento FormaPagamento { get; set; }

        public DateTime DataPedido { get; set; }

        public ICollection<ItemPedido> ItensPedido { get; set; }

        public DateTime DataPrevisaoEntrega { get; set; }

        public string CEP { get; set; }

        public string Cidade { get; set; }
        
        public string UF { get; set; }

        public string Endereco { get; set; }

        public string NumeroEndereco { get; set; }

        public override void Validate()
        {
            LimparLista();

            if (!ItensPedido.Any())            
                MensagemValidacao.Add("Erro: Pedido sem itens válidos");

            if (string.IsNullOrEmpty(CEP))
                MensagemValidacao.Add("Erro: O campo CEP deve ser preenchido");
        }
    }
}
