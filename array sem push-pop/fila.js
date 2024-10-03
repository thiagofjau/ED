class Fila {
    constructor()
    {
        this.items = {}; //objeto p/ armazenar itens
        this.inicio = 0; //representa o índice do INÍCIO da fila
        this.fim = 0; //representa o índice do FIM da fila
    }

    //metodos

    //adiciona um elemento ao final da fila (enqueue)
    enqueue(elemento)
    {
        this.items[this.fim] = elemento; //coloca o elemento no FIM da fila
        this.fim++; //incrementa o índice do FIM da fila
    }

    //remove e retorna o primeiro elemento da fila (dequeue)
    dequeue()
    {
        if (this.isEmpty()) {
            return undefined; //se a fila esiver vazia, retorna undefined
        }

        const item = this.items[this.inicio]; //obtém o primeiro elemento
        delete this.items[this.inicio]; //remove o item do INÍCIO da fila
        this.inicio++; //move o índice do INÍCIO para o proximo item

        //quando o início e o fim estiverem alinhados, redefine a fila
        if (this.inicio === this.fim) {
            this.inicio = 0;
            this.fim = 0;
        }

        return item; //retorna o item removido
    }

    //retorna o primeiro elemento da fila sem removê-lo (peek)
    front()
    {
        if (this.isEmpty()) {
            return undefined; //se a fila estiver vazia, retorna undefined
        }
        return this.items[this.inicio]; //retorna o primeiro elemento
    }
    
    //funcao isEmpty
    isEmpty() {
        return this.fim === this.inicio; //verifica se os indices estão iguais
    }

    //funcao retorna tam da fila
    size()
    {
        return this.fim - this.inicio; //calcula a diferenca entre fim e inicio
    }

    clear()
    {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }
}

//usando a fila
// exemplo de uso

let minha_variavel = new Fila();

minha_variavel.enqueue("Cliente 1");
minha_variavel.enqueue("Cliente 2");
minha_variavel.enqueue("Cliente 3");

console.log(minha_variavel.front()); //saída: "Cliente 1"

console.log(minha_variavel.dequeue());//saída "cliente 1"
console.log(minha_variavel.dequeue());//saída "cliente 2"

minha_variavel.enqueue("Cliente 4");
minha_variavel.enqueue("Cliente 5");

console.log(minha_variavel.size());

console.log(minha_variavel.front());