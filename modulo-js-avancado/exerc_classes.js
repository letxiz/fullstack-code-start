/*1- Crie uma classe chamada "Guerreiro", que receba,
em seu constructor, um "nome" e uma "idade", e que
contenha um método chamado "lutar" que logue uma
msg dizendo "O guerreiro {nome}, de {idade} anos, 
está lutando!"*/

class Guerreiro {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
  lutar(){
    console.log(`O guerreiro ${this.nome}, de ${this.idade} anos, está lutando!`);
  }
}
const guerreiro = new Guerreiro("Aragorn", 87);
guerreiro.lutar();

/* Crie uma classe chamada "Viking" derivada da classe "Guerreiro", 
criada acima. Sobreescreva o método "lutar" para que ele 
logue uma msg dizendo 
"O viking {nome}, de {idade} anos, está 
lutando com um machado!"*/

class Viking extends Guerreiro{
  lutar(){
    console.log(`O viking ${this.nome}, de ${this.idade} anos, está lutando com um machado!`)
  }


/* 3 - Crie também na classe "Viking" um método chamado
"lutarComMachado", que logue uma msg dizendo "O
 viking {nome}, de {idade} anos está lutando com o seu machado nom de Thor!"*/

  lutarComMachado(){
    console.log(`O viking ${this.nome}, de ${this.idade} anos, está lutando com o seu machado em nome de Thor!`)
  }
}
const viking = new Viking('Pedro',50);
viking.lutar();
viking.lutarComMachado();