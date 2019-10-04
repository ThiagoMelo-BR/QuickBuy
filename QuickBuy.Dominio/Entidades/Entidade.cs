using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemvalidacao { get; set; }

        private List<string> mensagemValidacao
        {
            get { return _mensagemvalidacao ?? (_mensagemvalidacao = new List<string>()); }
        }

        public abstract void Validate();   

        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }

        protected void AdicionarCritica(string critica)
        {
            mensagemValidacao.Add(critica);
        }

        protected void LimparLista()
        {
            mensagemValidacao.Clear();
        }

        public string RetornarListaMensagem()
        {
            return string.Join(". ", mensagemValidacao);
        }
    }
}
