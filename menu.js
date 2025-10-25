//instalado a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblio
let prompt = PromptSync();


//class é um modelo de algo(objeto)
class Pessoa {

    //atributo privado
    #senha;

    //construtor constroi mais de um objeto
    //para por os valores de cada obj, colocamos via parametro
    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.#senha = senha
        this.palavraChave = palavraChave
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
    }

    //metodo especial que permite eu gerenciar a visualizacao da senha
    get senha() {
        const palavraChave = prompt("Para ve a sua senha, você precisa digitar a palavra chave: ");

        //condicional simples
        if (this.palavraChave == palavraChave) {
            return this.#senha;
        }
        else {
            return "Foi mal, tente novamente!";
        }
    }
}

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = parseInt(prompt("Digite o sua idade: "));
let dataNascPessoa = prompt("Digite sua data de nascimento no formato AAAA/MM/DD");
let senhaPessoa = prompt("Digite sua senha: ");
let palavraChavePessoa = prompt("Digite a palavra-chave, caso um dia queira ver a sua senha: ");

//criando o objeto
const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa,
    palavraChavePessoa
);

//aciona a função do objeto já criado
novaPessoa.apresentar();
//acionando ver a senha
novaPessoa.senha

//exibir todo o objeto
console.log(novaPessoa);



