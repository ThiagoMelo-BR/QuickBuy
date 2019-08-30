using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
            
        }

        public Usuario VerificarUsuario(Usuario usuario)
        {            
            return QuickBuyContexto
                .Usuarios                
                .ToList()
                .Where(u => u.Email == usuario.Email && u.Senha == usuario.Senha)
                .FirstOrDefault();
        }
    }
}
