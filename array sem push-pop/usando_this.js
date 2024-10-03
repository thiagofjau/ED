class Aluno
{
    constructor()
    {
        this.nome = "";
        this.idade = 0;        
    }

    getNome() {
        return "Nome: " + this.nome;
    }

    getIdade() {
        return "Idade: " + this.idade;
    }

    setNome(_nome) {
        this.nome = _nome;
    }

    setIdade(_idade) {
        this.idade = _idade;
    }
    
}

//usando a classe Aluno
let aluno1 = new Aluno(); //criou objeto
aluno1.setNome("Paulo");//setou nome
aluno1.setIdade(18);//setou idade

let aluno2 = new Aluno(); //criou objeto
aluno2.setNome("João");//setou nome
aluno2.setIdade(38);//setou idade

let aluno3 = new Aluno(); //criou objeto
aluno3.setNome("João");//setou nome
aluno3.setIdade(38);//setou idade

console.log(aluno1.getNome());
console.log(aluno1.getIdade());
console.log(aluno2.getNome());
console.log(aluno2.getIdade());
console.log(aluno3.getNome());
console.log(aluno3.getIdade());
