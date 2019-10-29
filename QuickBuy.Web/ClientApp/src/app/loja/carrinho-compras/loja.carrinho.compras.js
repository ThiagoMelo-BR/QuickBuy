"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var existeProdutoNaLista = false;
        var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');
        if (!produtosLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            this.produtos = JSON.parse(produtosLocalStorage);
            //Verificando se o produto existe na lista      
            this.produtos.map(function (val) {
                if (val.id == produto.id) {
                    existeProdutoNaLista = true;
                }
            });
            if (!existeProdutoNaLista) {
                this.produtos.push(produto);
            }
            else {
                alert('Produto já adicionado ao pedido!');
            }
        }
        localStorage.setItem('produtosLocalStorage', JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');
        if (produtosLocalStorage) {
            return JSON.parse(produtosLocalStorage);
        }
        else
            return this.produtos;
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtosLocalStorage = localStorage.getItem('produtosLocalStorage');
        if (produtosLocalStorage) {
            this.produtos = JSON.parse(produtosLocalStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem('produtosLocalStorage', JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem('produtosLocalStorage', JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensNoCarrinho = function () {
        var itens = this.obterProdutos();
        return itens.length > 0;
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map