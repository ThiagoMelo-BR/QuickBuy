import { Produto } from "../../model/produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var existeProdutoNaLista = false;
    var produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
    
    if (!produtoLocalStorage) {
      this.produtos.push(produto);      
    }
    else {
      this.produtos = JSON.parse(produtoLocalStorage);

     //Verificando se o produto existe na lista
      
      this.produtos.map(val => {
        if (val.id == produto.id) {
          existeProdutoNaLista = true;
        }
      })

      if (existeProdutoNaLista == false) {
        this.produtos.push(produto);
      }
      else {
          alert('Produto já adicionado ao pedido!');
        }        
    }

    localStorage.setItem('produtoLocalStorage', JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem('produtoLocalStorage');

    if (produtoLocalStorage) {
      return JSON.parse(produtoLocalStorage);
    }    
  }

  public removerProduto(produto: Produto) {
    
  }
}
