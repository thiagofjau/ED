class CarrinhoDeCompras 
{
    // Inicializa o carrinho com um array vazio de produtos, preço total e total de itens
    constructor() 
    {
        this.produtos = [];  // Armazena os produtos como um objeto, simulando um array
        this.precoTotal = 0;  // Mantém o controle do preço total
        this.totalItens = 0;  // Mantém o controle da quantidade de produtos no carrinho
    }

    // Adiciona um produto ao carrinho
    adicionarProduto(produto, preco, quantidade = 1) 
    {
        // Cria um objeto com os dados do produto
        let dados_produto = { 
            nome: produto, 
            preco: preco,
            totalUnitario: preco * quantidade 
        };  
        
        this.produtos[this.totalItens] = dados_produto;  // Armazena o produto no índice atual
        this.precoTotal += dados_produto.totalUnitario;  // Adiciona o total unitário ao total
        this.totalItens++;  // Incrementa a quantidade de produtos
        console.log(`${produto} adicionado ao carrinho. Total: R$ ${dados_produto.totalUnitario}`);
    }

    // Remove o último produto do carrinho
    removerProduto() 
    {
        if (this.totalItens === 0) {
            console.log("Carrinho vazio. Nenhum produto para remover.");
            return; // Cessa a execução do método
        }

        const ultimoProduto = this.produtos[this.totalItens - 1];  // Obtém o último produto
        console.log(`${ultimoProduto.nome} removido do carrinho.`);
        
        this.precoTotal -= ultimoProduto.totalUnitario;  // Subtrai o preço do total
        delete this.produtos[this.totalItens - 1];  // Remove o último produto
        
        this.totalItens--;  // Decrementa a quantidade de itens no array
    }

    // Exibe o total de itens no carrinho
    QntItensCarrinho() 
    {
        console.log(`Total de itens no carrinho: ${this.totalItens}`);
        return this.totalItens;
    }

    // Calcula e retorna o valor total do carrinho
    valorTotal() 
    {
        console.log(`Valor total do carrinho: R$ ${this.precoTotal}`);
        return this.precoTotal;
    }

    // Limpa completamente o carrinho
    limparCarrinho() 
    {
        this.produtos = [];  // Reseta o objeto de produtos
        this.precoTotal = 0;  // Reseta o valor total
        this.totalItens = 0;  // Reseta a quantidade
        console.log("Carrinho limpo.");
    }
}

// Exemplo de uso
let carrinho = new CarrinhoDeCompras();

// Adicionando produtos ao carrinho
carrinho.adicionarProduto("Camisa", 50);
carrinho.adicionarProduto("Calça", 100, 2);
carrinho.adicionarProduto("Tênis", 150, 1);

// Exibe total de itens e valor total
carrinho.QntItensCarrinho();  // Saída: Total de itens no carrinho: 3
carrinho.valorTotal();  // Saída: Valor total do carrinho: R$ 300.00

// Removendo o último produto
carrinho.removerProduto();  // Saída: Tênis removido do carrinho

// Exibe total de itens e valor total novamente
carrinho.QntItensCarrinho();  // Saída: Total de itens no carrinho: 2
carrinho.valorTotal();  // Saída: Valor total do carrinho: R$ 150.00

// Limpar o carrinho
carrinho.limparCarrinho();  // Saída: Carrinho limpo.