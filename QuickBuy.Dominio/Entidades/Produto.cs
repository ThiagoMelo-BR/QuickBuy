namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public decimal Preco { get; set; }

        public string DiretorioImagem { get; set; }

        public override void Validate()
        {
            LimparLista();

            if (string.IsNullOrEmpty(Nome))            
                AdicionarCritica("Nome do produto é obrigatório");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição do produto é obrigatório");

            if(Descricao.Length < 50)            
                AdicionarCritica("A descriação do produto precisa ter ao mínimo 50 caracteres");            

            if (Preco <= 0)
                AdicionarCritica("Preço do produto é obrigatório");              
            
        }
    }
}
