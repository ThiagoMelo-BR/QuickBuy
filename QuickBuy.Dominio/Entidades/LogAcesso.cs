using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class LogAcesso : Entidade
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }

        public virtual Usuario Usuario { get; set; }

        public DateTime Data { get; set; }

        public override void Validate()
        {
            LimparLista();                       

            if (UsuarioId <= 0)
                AdicionarCritica("Campo Usuário é obrigatório");

            if (Data == null)
                AdicionarCritica("Campo data é obrigatório");
        }
    }
}
