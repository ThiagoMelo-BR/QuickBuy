using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }

        public IEnumerable<Pedido> ObterPedidosPorUsuario(int idUsuario)
        {
            return QuickBuyContexto
                .Pedidos
                .ToList()
                .Where(p => p.UsuarioId == idUsuario);
        }
    }
}
