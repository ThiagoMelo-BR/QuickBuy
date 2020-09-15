using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.SqlTypes;

namespace QuickBuy.Repositorio.Repositorios
{
    public class LogAcessoRepositorio : BaseRepositorio<LogAcesso>, ILogAcessoRepositorio
    {
        public LogAcessoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
            
        }

        public IEnumerable<LogAcesso> ObterTodos(DateTime datainicial, DateTime datafinal)
        {
            return QuickBuyContexto
                .LogAcessos
                .Include(u => u.Usuario)
                .Where(u=> u.Data.Date >= datainicial && u.Data.Date <= datafinal)
                .ToList()
                .OrderByDescending(u => u.Id);
        }
    }
}
