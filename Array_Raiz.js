var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [12.5, 13.0, 11.8, 20.1, 19.6, 22.3, 22.6]; //pos 0
var avgTempWeek2 = [22.5, 23.0, 21.8, 20.1, 9.6, 4, 5]; //pos 1

var avgTempWeek3 = [32.5, 31.0, 31.8, 30.1, 9.6, 4, 5]; //pos 2
var avgTempWeek4 = [42.5, 4.0, 41.8, 40.1, 4.6, 4, 5]; //pos 3

firstWeeks = [avgTempWeek1, avgTempWeek2]; //month pos 0
lastWeeks = [avgTempWeek3, avgTempWeek4]; // month pos 1

month = [firstWeeks, lastWeeks]; //pos 0, pos 1

// console.log(month[0][1][2]); //21.8

//percorrer os arrays
for (let x = 0; x < month.length; x++) {
    for (let y = 0; y < month[x].length; y++) {
        for (let z = 0; z < month[x][y].length, z++;){
            console.log(month[x][y][z]);
            
        }
    }
}










// Disciplina: Estrutura de Dados.
// Professor: Tiago Antônio da Silva.
// Descrição: adicione e remova elementos de um array sem utilizar funções nativas.
// Autor(a): Pablo Valentin.
// Data atual: 26/09/2024

// Classe.

// class Array_Raiz
// {

//     lista;
    

//     comprimento;

//     constructor()
//     {

//         this.lista = [];

//         this.comprimento = 0;

//     }

//     Adicionar_Elemento(elemento)
//     {

//         this.lista[this.comprimento] = elemento;

//         this.comprimento++;

//     }

//     Remover_Elemento()
//     {

//         if(this.comprimento > 0)
//         {

//             if(this.comprimento === 1)
//             {

//                 this.lista = [];

//                 this.comprimento = 0;

//             }

//             else
//             {

//                 let nova_lista = [];

//                 for(let i = 0; i < this.comprimento - 1; i++)
//                 {
        
//                     nova_lista[i] = this.lista[i];
        
//                 }
        
//                 this.lista = nova_lista;

//                 this.comprimento--;

//             }

//         }

//     }

//     Retornar_Elemento(elemento)
//     {

//         let retorno = null;

//         let indice = 0;

//         for(let i = 0; i < this.comprimento; i++)
//         {

//             if(this.lista[i] === elemento)
//             {

//                 retorno = this.lista[i];

//                 indice = i;

//                 break;

//             }

//         }

//         return (retorno === null) ? `O elemento ${elemento} não existe no Array.` : `O elemento ${retorno} foi encontrado na posição ${indice} do Array.`;

//     }

//     Retornar_Comprimento()
//     {

//         return this.comprimento;

//     }

//     Resetar()
//     {

//         this.lista = [];

//         this.comprimento = 0;

//     }

// }

// // Objeto.

// var array = new Array_Raiz();

// // Exemplo.

// console.log("------------------------------------------------------------------");

// console.log("Estado inicial do Array:\n");

// console.table(array.lista);

// console.log("------------------------------------------------------------------");

// array.Adicionar_Elemento("Teste01");

// array.Adicionar_Elemento("Teste02");

// array.Adicionar_Elemento("Teste03");

// array.Adicionar_Elemento("Teste04");

// console.log("Estado do Array após algumas inserções:\n");

// console.table(array.lista);

// console.log("------------------------------------------------------------------");

// array.Remover_Elemento();

// array.Remover_Elemento();

// console.log("Estado do Array após algumas remoções:\n");

// console.table(array.lista);

// console.log("------------------------------------------------------------------");

// console.log("Pesquisando elementos do Array:\n");

// console.log(array.Retornar_Elemento("Teste01"), "\n");

// console.log(array.Retornar_Elemento("Teste03"));

// console.log("------------------------------------------------------------------");

// console.log("Comprimento atual do Array:", array.Retornar_Comprimento());

// console.log("------------------------------------------------------------------");

// array.Resetar();

// console.log("Resetando o Array:\n");

// console.table(array.lista);

// console.log("------------------------------------------------------------------");

// let avgTemp = [];

// avgTemp[0] = 39.1;
// avgTemp[1] = 31.1;
// avgTemp[2] = 381.1;

// console.log(avgTemp[1]);

// array iterado com for



// //passo 1 declara array vazio
// fibonacci = [];

// //passo 2 declara r primeiras pos com valor 0, 1, 1 para poder somar os próx
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// fibonacci[2] = 1;

// //laço e inicia do 3, porque as pos 0,1,2 já foram preenchidas. 20 iterações limites de pos e calculos de fibonacci, pode ser maior se quiser...
// for(let i = 3; i < 20; i++) {
//     fibonacci[i] = fibonacci[i - 1]/*n-1*/ + fibonacci[i - 2]/*n-2*/
// }
// // console.log(fibonacci);

// for(var i = 0; i < fibonacci.length; i++) {
//     console.log(fibonacci[i]);
    
// }