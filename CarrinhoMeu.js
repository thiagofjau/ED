/*Implementar um sistema de carrinho de compras em js sem usar funcoes nativas de arrays (push/pop/lenght)
O carrinho deve permitir add produtos, remover, exibir o total de itens e o valor total do carrinho

requisitos:
-add produto-função adicionarProduto(pruduto, preco) deve add um produto ao FINAL do carrinho ok
-remover produto-função removerProduto(index) deve remover o último produto do carrinho ok
-total de itens-função totalItens() deve retornar quantos itens no carrinho ok
-valor total-função valorTotal() deve retornar o valor total do carrinho ok
-limpar carrinho-função limparCarrinho() deve remover todos os itens do carrinho ok
*/

class Carrinho
{
    constructor() {
        this.produtos = []; //cria um objeto vazio para armazenar os produtos
        this.pos = 0; //inicializa o array de produtos/pos
    }

    //adiciona um produto ao carrinho
    adicionarProduto(elemProduto, elemPreco, elemQnt) {
        this.produtos[this.pos] = {elemProduto, elemPreco, elemQnt}; //adiciona o produto/preco ao array de produtos
        this.pos++; //incrementa a pos
    }

    removerProduto() {
        if (this.pos === 0) {
            return undefined; //retorna indefinido se vazio
        }
        const ultimoItem = this.produtos[this.pos - 1]; //pega o ultimo item do carrinho
        delete this.produtos[this.pos -1]; //remove o ultimo item/topo do carrinho
        this.pos--; //decrementa a pos

        return ultimoItem; //retorna o ultimo item do carrinho
    }
    valorTotal() {
        let total = 0; //declara/inicializa var total
        for (let i = 0; i < this.pos; i++) {
            total += this.produtos[i].elemPreco * this.produtos[i].elemQnt; //soma o preço de cada produto
        }
        return total; //retorna o valor total
    }

    totalItens() {
        return this.pos; //retorna a quantidade de produtos
    }

    limparCarrinho() {
        this.produtos = {}; //esvazia/reinicializa o carrinho
        this.pos = 0; //esvazia/reinicializa o array/lenght
    }

}

let carrinho = new Carrinho(); //cria um novo carrinho
carrinho.adicionarProduto("banana", 2.50, 10); //adiciona um produto ao carrinho
carrinho.adicionarProduto("Beterraba", 2.50, 5); //adiciona um produto ao carrinho
// carrinho.adicionarProduto("caqui", 2.50, 5); //adiciona um produto ao carrinho
// carrinho.adicionarProduto("cenoura", 2.50, 5); //adiciona um produto ao carrinho
// carrinho.adicionarProduto("limao", 2.56, 2); //adiciona um produto ao carrinho
// carrinho.adicionarProduto("laranja", 2.50, 8); //adiciona um produto ao carrinho

console.log(carrinho);

console.log("Total Carrinho: R$ " + carrinho.valorTotal()); //calcula valor total carrinho

// console.log(carrinho.removerProduto());
// console.log(carrinho.removerProduto());

// console.log(carrinho.limparCarrinho()); //esvazia o carrinho


console.log("Qnt:" + carrinho.totalItens(), "Valor: R$" + carrinho.valorTotal()); //lenght atual do array de produtos

console.log("Total Carrinho: R$ " + carrinho.valorTotal()); //calcula valor total carrinho