using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class LogAcessoConfiguration : IEntityTypeConfiguration<LogAcesso>
    {
        public void Configure(EntityTypeBuilder<LogAcesso> builder)
        {
            builder.HasKey(l => l.Id);
            builder.Property(l => l.Data).IsRequired();
            builder.Property(l => l.UsuarioId).IsRequired();
            
        }
    }
}
