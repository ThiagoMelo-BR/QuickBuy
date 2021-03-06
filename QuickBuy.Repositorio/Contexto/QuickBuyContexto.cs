﻿using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Pedido> Pedidos { get; set; }
        
        public DbSet<Produto> Produtos { get; set; }

        public DbSet<ItemPedido> ItensPedido { get; set; }

        public DbSet<FormaPagamento> FormasPagamentos { get; set; }

        public DbSet<LogAcesso> LogAcessos { get; set; }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new LogAcessoConfiguration());

            base.OnModelCreating(modelBuilder);

        }

        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
             
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();            
        }
    }
}
