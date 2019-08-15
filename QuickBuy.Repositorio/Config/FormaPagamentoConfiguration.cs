using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class FormaPagamentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            builder.HasKey(f => f.Id);

            builder.Property(f => f.Nome).IsRequired().HasMaxLength(50);
            builder.Property(f => f.Descricao).IsRequired().HasMaxLength(100);

            builder.HasData(
                new FormaPagamento { Id = 1, Descricao = "Não definido", Nome = "Não definido" },
                new FormaPagamento { Id = 2, Descricao = "A vista", Nome = "A vista" },
                new FormaPagamento { Id = 3, Nome = "Cartão", Descricao = "Cartão"},
                new FormaPagamento { Id = 4, Nome = "Tranferência", Descricao = "Tranferência" }
                );
        }
    }
}
