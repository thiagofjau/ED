class MeuArray {
    constructor ()
    {
        this.items = {} //Usamos um objeto para armazenar os itens do array
        this.tamanho = 0; //mantemos o constrole do tamanho do array
    }

    //add um elemento ao final do array
    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento; //insere o elemento na posicao atual do tamanho
        this.tamanho++; //incrementa o tamanho
    }

    //remove o último elemento do array
    remover()
    {
        if (this.tamanho === 0) {
            return undefined; //se o array estiver vazio, não há o que remover
        }

        const ultimoItem = this.items[this.tamanho - 1]; //armazena o último item
        delete this.items[this.tamanho - 1] //remove o último item do array
        this.tamanho--; //decrementa o tamanho

        return ultimoItem; //retorna o item removido
    }

    //acessa o elemento em um índice específico
    obterElemento(indice)
    {
        if (indice <0 || indice >= this.tamanho) {
            return undefined; //se o índice estiver fora do alcance, retorna undefined
        }
        return this.items[indice]; //retorna o item no indice solicitado
    }

    //retorna o tamanho do array
    tamanhoArray()
    {
        return this.tamanho; // retorna o valor do tamanho atual do array
    }

    //remove todos os elementos do array
    limpar()
    {
        this.items = {}; //limpa o objeto
        this.tamanho = 0; //reinicializa o tamanho
    }

}//fimclasse

let minha_variavel = new MeuArray();

minha_variavel.adicionar(10); //(10) foi adicionado o valor 10 no array pos 0
minha_variavel.adicionar(20);//(20) foi adicionado o valor 20 no array pos 1
minha_variavel.adicionar(30); //(30) foi adicionado o valor 30 no array pos 2

console.log(minha_variavel.obterElemento(1)); //saida 20
console.log(minha_variavel.tamanhoArray()); //saida 3

console.log(minha_variavel.remover()); //vazio remove o último elemento, se colocar 0, remove primeiro elemento
// console.log(minha_variavel.remover(2)); //remove o terceiro elemento
console.log(minha_variavel.tamanhoArray()); //mostra de novo tam do array agora 2 pq removeu um
