using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemvalidacao;

        public abstract void Validate();

        protected List<string> MensagemValidacao
        {
            get { return _mensagemvalidacao ?? (_mensagemvalidacao = new List<string>()); }
        }

        public bool EhValido
        {
            get { return !_mensagemvalidacao.Any(); }
        }

        protected void LimparLista()
        {
            _mensagemvalidacao.Clear();
        }
    }
}
