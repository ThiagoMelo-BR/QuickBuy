using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;

namespace QuickBuy.Repositorio.Repositorios
{
    public class LogAcessoRepositorio : BaseRepositorio<LogAcesso>, ILogAcessoRepositorio
    {
        public LogAcessoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
            
        }
    }
}
