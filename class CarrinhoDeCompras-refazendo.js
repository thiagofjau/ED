class CarrinhoDeCompras{
    //Inicializa o carrinho com um array vazio de produtos, precototal e total
    constructor(){
        this.produtos = [];
        this.precoTotal = 0;
        this.totalItens = 0;
    }

    //Add um produto ao carrinho. em ADD q cria o objeto c/ dados do produto
    adicionarProduto(produto, preco, quantidade = 1) {

        //cria um objeto com os dados do produto
        let dadosProduto = {
            nome: produto,
            preco: preco,
            totalUnitario: preco * quantidade
        }

        this.produtos[this.totalItens] = dadosProduto; //armazena o prod no índice atual
        this.precoTotal += dadosProduto.totalUnitario; //add o total unitário ao Total
        this.totalItens++; //incrementa a quant de produtos
        console.log(`${produto} adicionado ao carrinho. Total: R$ ${dadosProduto.totalUnitario}`);
        
    }
    
}

let carrinho = new CarrinhoDeCompras();

carrinho.adicionarProduto("Camisa", 510,2/*, não precisa passar se for 1, pq já foi definido previne erros*/)
carrinho.adicionarProduto("tenis", 510,2/*, não precisa passar se for 1, pq já foi definido previne erros*/)
carrinho.adicionarProduto("calca", 510,2/*, não precisa passar se for 1, pq já foi definido previne erros*/)

console.log(carrinho);
