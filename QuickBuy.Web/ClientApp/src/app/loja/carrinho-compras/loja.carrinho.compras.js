"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var existeProdutoNaLista = false;
        var produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            this.produtos = JSON.parse(produtoLocalStorage);
            //Verificando se o produto existe na lista
            this.produtos.map(function (val) {
                if (val.id == produto.id) {
                    existeProdutoNaLista = true;
                }
            });
            if (existeProdutoNaLista == false) {
                this.produtos.push(produto);
            }
            else {
                alert('Produto já adicionado ao pedido!');
            }
        }
        localStorage.setItem('produtoLocalStorage', JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
        if (produtoLocalStorage) {
            return JSON.parse(produtoLocalStorage);
        }
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map