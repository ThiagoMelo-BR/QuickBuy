import { Produto } from "../../model/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var existeProdutoNaLista = false;
    var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');

    produto.quantidade = 1;

    if (!produtosLocalStorage) {
      this.produtos.push(produto);
    }
    else {
      this.produtos = JSON.parse(produtosLocalStorage);

      //Verificando se o produto existe na lista      
      this.produtos.map(val => {
        if (val.id == produto.id) {
          existeProdutoNaLista = true;
        }
      })

      if (!existeProdutoNaLista) {
        this.produtos.push(produto);
      }
      else {
        alert('Produto já adicionado ao pedido!');
      }
    }

    localStorage.setItem('produtosLocalStorage', JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');

    if (produtosLocalStorage) {
      return JSON.parse(produtosLocalStorage);
    }
    else
      return this.produtos;
  }

  public removerProduto(produto: Produto) {
    var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');

    if (produtosLocalStorage) {
      this.produtos = JSON.parse(produtosLocalStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem('produtosLocalStorage', JSON.stringify(this.produtos));
    }
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem('produtosLocalStorage', JSON.stringify(produtos));
  }

  public temItensNoCarrinho(): boolean {
    var itens = this.obterProdutos();
    return itens.length > 0;
  }

  public limparCarrinho() {
    localStorage.setItem('produtosLocalStorage', "");
  }
}
