using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Contratos
{
    public interface IBaseRepositorio<TEntity> : IDisposable where TEntity : class
    {
        void Adicionar(TEntity entity);
        void Atualizar(TEntity entity);
        void Excluir(TEntity entity);
        TEntity ObterPorId(int id);
        IEnumerable<TEntity> ObterTodos();

        

    }
}
