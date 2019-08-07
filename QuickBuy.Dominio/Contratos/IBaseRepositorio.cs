using System;
using System.Collections;

namespace QuickBuy.Dominio.Contratos
{
    public interface IBaseRepositorio<TEntity> : IDisposable where TEntity : class
    {
        void Excluir(int id);
        void Adicionar(TEntity entity);
        void Atualizar(TEntity entity);
        TEntity ObterPorId(int id);
        IEnumerable ObterTodos();

    }
}
