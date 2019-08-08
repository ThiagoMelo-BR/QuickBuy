using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Pedido> Pedidos { get; set; }

        public DbSet<Produto> Produtos { get; set; }

        public DbSet<ItemPedido> ItensPedido { get; set; }

        public DbSet<FormaPagamento> FormasPagamentos { get; set; }
    }
}
