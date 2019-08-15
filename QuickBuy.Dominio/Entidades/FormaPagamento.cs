using QuickBuy.Dominio.Enumeradores;

namespace QuickBuy.Dominio.Entidades
{
    public class FormaPagamento
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public bool NaoDefinido {
            get { return Id == (int)TipoFormaPagamento.NaoDefinido; }
        }

        public bool EhAVista
        {
            get { return Id == (int)TipoFormaPagamento.Cartao; }
        }

        public bool EhCartao
        {
            get { return Id == (int)TipoFormaPagamento.Cartao; }
        }

        public bool EhTransferencia
        {
            get { return Id == (int)TipoFormaPagamento.Transferencia; }
        }
    }
}
