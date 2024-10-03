class MinhaPilha 
{
    constructor(){
        this.items = {}; //objeto para armazenas elementos na pilha
        this.tamanho = 0; //manter o controle do tamanho da pilha
    }

    //adicionamos um elemento ao topo da pilha
    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento; //insere o elemento na pos atual do tamanho
        this.tamanho++; //incrementa o tamanho
    }

    //remove e retorna o elemento do topo da pilha
    remover()
    {
        if (this.tamanho === 0) {
            return undefined; //se a pilha estiver vazia, retorna undefined
        }

        const ultimoItem = this.items[this.tamanho -1];//pega o item no topo da pilha
        delete this.items[this.tamanho - 1];//remove o item do topo
        this.tamanho--;//decrementa o tamanho

        return ultimoItem;//retorna o item removido
    }

    //retorna o elemento no topo da pilha sem removê-lo
    topo() {
        if (this.tamanho === 0) {
            return undefined;
        }
        return this.items[this.tamanho - 1];//retorna o item no topo
    }

    //verifica se pilha está vazia
    estaVazia() {
        return this.tamanho === 0;//verifica se o tamanho da pilha é zero
    }

    //retorna o número de elementos na pilha
    tamanhoPilha() {
        return this.tamanho; //retorna o tamanho da pilha
    }

    //limpa a pilha
    limpar()
    {
        this.items = {}; //reseta os itens
        this.tamanho = 0; //reinicializa o tamanho
    }
    
}

//pilha como usar exemplo

let minha_variavel = new MinhaPilha();

//inserindo valores nos arrays de pilha
minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

console.log(minha_variavel.topo()); //saída 30 (elemento no topo)

console.log(minha_variavel.remover());//saída 30(remove o elemento do topo)
console.log(minha_variavel.topo());//saída agora o topo é 20

console.log(minha_variavel.tamanhoPilha());//saída 2 (2 elementos restantes)
