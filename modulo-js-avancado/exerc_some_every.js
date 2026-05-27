/* 1 - Guarde um valor em uma variável se algum valor da lista
"numeros" é par, e logue-a no console.*/

const numeros = [1, 2, 3, 4, 5, 6];

const numerosEPar = numeros.some(num => num % 2=== 0);
console.log(numerosEPar)


/* 2 - Guarde uma varivável se alguma pessoa da lista
"pessoas" é maior de idade, e logue-a no console*/

const pessoas = [
  {
    nome: 'Ragnarok',
    idade: 38
  },
  {
    nome: 'Harvey Specter',
    idade: 41
  },
  {
    nome: 'Joe Doe',
    idade: 12
  }
]

const pessoasMaiorDeIdade = pessoas.some(pessoa => pessoa.idade > 18);
console.log(pessoasMaiorDeIdade)


/* 3 - Guarde em uma variável se todos os valores da lista
"numeros2" é par, e logue-a no console*/

const numeros2 = [1, 2, 3, 4, 5, 6]

/*4- Guarde em uma variável se todos os itens 
da "listaDeDesejos" está em estoque (quantidadeEstoque 
maior que 0)*/

const listaDeDesejos = [
  {
    titulo: 'Tesla Model 5',
    quantidadeEstoque: 0,
  },
  {
    titulo: 'MacBook Pro',
    quantidadeEstoque: 10,
  },
  {
    titulo: 'Carro de Fórmula 1',
    quantidadeEstoque: 1,
  }
];
const todosEmEstoque = listaDeDesejos.every(
  item => item.quantidadeEstoque > 0
);
console.log(todosEmEstoque);
