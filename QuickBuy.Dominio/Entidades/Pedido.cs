using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }

        public int UsuarioId { get; set; }

        public DateTime DataPedido { get; set; }

        public ICollection<ItemPedido> ItensPedido { get; set; }
    }
}
