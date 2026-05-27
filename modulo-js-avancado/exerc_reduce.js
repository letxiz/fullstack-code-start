/* 1- Guarde em um variável a soma de todos os valores
contidos na lista "numeros", e logue-a no console. */

const numeros = [ 3, 4, 6, 8];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);

/* 2- Guarde em uma varivável uma sring que contenha todos os valores
da lista "letraas", e logue-a no console. */

const letras = ['a', 'b', 'c', 'd']

const stringConcatenada = letras.reduce((acumulador, item) => acumulador + item, '');
console.log(stringConcatenada);


/* 3- Guarde em uma variável a soma das idades de todas
as pessoas que votaram ( votou = true ) e logue-a no console. */

const pessoas = [
    { nome: 'João', idade: 30, votou: true },
    { nome: 'Maria', idade: 25, votou: false },
    { nome: 'Pedro', idade: 40, votou: true },
    { nome: 'Ana', idade: 22, votou: false },
    { nome: 'Lucas', idade: 35, votou: true},
    { nome: 'Carla', idade: 28, votou: false },
    { nome: 'Rafael', idade: 45, votou: true },
    { nome: 'Fernanda', idade: 32, votou: false },
    { nome: 'Gustavo', idade: 38, votou: true },
    { nome: 'Mariana', idade: 27, votou: false }
]

const somasDasIdadesDasPessoasQueVotaram = pessoas.reduce((acumulador, pessoa) => {
    if (pessoa.votou === true) {
        return acumulador + pessoa.idade;
    }
    return acumulador;
}, 0);

console.log(somasDasIdadesDasPessoasQueVotaram);

console.log('---');
 // Outra forma de resolver o mesmo problema usando operador ternário
const somaDasIdadesDasPessoasQueVotaram = pessoas.reduce(
(acumulador, pessoa) => acumulador + (pessoa.votou ? pessoa.idade : 0)
, 0);
console.log(somaDasIdadesDasPessoasQueVotaram);


/*4- Guarde em uma variável a soma de todos os produtos
na nossa lista de desejos e logue-a no console. */

const listaDeDesejos = [
    { nome: 'Smartphone', preco: 1500 },
    { nome: 'Notebook', preco: 3000 },
    { nome: 'Fone de Ouvido', preco: 200 },
    { nome: 'Smartwatch', preco: 800 },
    { nome: 'Tablet', preco: 1200 },
    { nome: 'Câmera', preco: 2500 },
    { nome: 'Console de Videogame', preco: 3500 },
    { nome: 'TV', preco: 4000 },
    { nome: 'Caixa de Som', preco: 600 },
    { nome: 'E-reader', preco: 900 }
]

const somaDosPrecosDosProdutosNaListaDeDesejos = listaDeDesejos.reduce(
  (acumulador, produto) => acumulador + produto.preco, 0);

console.log(somaDosPrecosDosProdutosNaListaDeDesejos);