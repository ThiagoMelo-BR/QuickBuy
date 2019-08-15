using QuickBuy.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace QuickBuy.Repositorio.Config
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(p => p.Id);

            
            builder.Property(p => p.UsuarioId).IsRequired();
            builder.Property(p => p.DataPedido).IsRequired().HasColumnType("Date");
            builder.Property(p => p.DataPrevisaoEntrega).HasColumnType("Date");
            builder.Property(p => p.Endereco).IsRequired().HasMaxLength(100);
            builder.Property(p => p.FormaPagamentoId).IsRequired();

            //Um pedido pode ter vários itens, uma lista de pedidos pode ter apenas um pedido
            builder.HasMany(p => p.ItensPedido).WithOne(i => i.Pedido);
        }
    }
}
