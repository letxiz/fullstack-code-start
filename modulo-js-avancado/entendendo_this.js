"use strict";


// 1) this em objeto com metodo
const pessoa = {
  nome: "Maria", // propriedade do objeto
  apresentar: function () { // metodo do objeto
    console.log("1.1 this ->", this); // this e o objeto que chamou o metodo
    console.log("1.2 this.nome ->", this.nome); // pega o nome da propria pessoa
  }
};

console.log("\nEXEMPLO 1"); // titulo no console
pessoa.apresentar(); // quem chamou foi pessoa, entao this = pessoa


// 2) this em funcao normal

function funcaoNormal() { // funcao comum
  console.log("2.1 this ->", this); // em strict mode, this vira undefined
}

console.log("\nEXEMPLO 2"); // titulo no console
funcaoNormal(); // chamada direta, sem objeto

// 3) this em arrow function
const exemploArrow = {
  nome: "Joao", // propriedade para comparar
  metodoArrow: () => { // arrow nao cria this proprio
    console.log("3.1 this ->", this); // this vem de fora (escopo lexico)
    console.log("3.2 this === exemploArrow ->", this === exemploArrow); // quase sempre false aqui
  }
};

console.log("\nEXEMPLO 3"); // titulo no console
exemploArrow.metodoArrow(); // mesmo chamando pelo objeto, arrow nao usa this do objeto

// 4) diferenca entre metodo e funcao comum
function mostrarNome() { // mesma funcao para os dois casos
  console.log("4.x this?.nome ->", this?.nome); // usa optional chaining para nao dar erro
}

const aluno = {
  nome: "Carlos", // nome do objeto
  mostrarNome: mostrarNome // vira metodo quando esta dentro do objeto
};

console.log("\nEXEMPLO 4"); // titulo no console
console.log("4.1 Chamando como metodo:");
aluno.mostrarNome(); // this = aluno
console.log("4.2 Chamando como funcao comum:");
mostrarNome(); // this = undefined (strict mode)

const carro = {
  marca: "Toyota", // propriedade do objeto
  verThis: function () { // metodo do objeto
    console.log("5.1 Passo 1: quem chamou? carro.verThis()");
    console.log("5.2 Passo 2: entao this e o objeto carro");
    console.log("5.3 Passo 3: this.marca ->", this.marca); // acessa marca do carro
  }
};

console.log("\nEXEMPLO 5"); // titulo no console
carro.verThis(); // this aponta para carro