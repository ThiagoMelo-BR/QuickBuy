using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Contratos
{
    public interface ILogAcessoRepositorio: IBaseRepositorio<LogAcesso>
    {
        public IEnumerable<LogAcesso> ObterTodos(DateTime datainicial, DateTime datafinal);
    }
}
