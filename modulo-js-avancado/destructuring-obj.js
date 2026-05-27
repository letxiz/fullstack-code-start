// Destructuring em objetos

// objeto
const usuario = {
  primeiroNome: 'Leticia',
  sobreNome: 'Alves',
  idade:23,

}

// Destructuring
const {primeiroNome, sobreNome, idade} = usuario; // variável seperada
console.log(primeiroNome); // Leticia
console.log(sobreNome); // Alves
console.log(idade); // 23

// Destructuring com variáveis com nome diferente
const {primeiroNome: nome, sobreNome: ultimoNome} = usuario; // variável com nome diferente
console.log(ultimoNome);

//Spread operator
const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}; // rest operator
console.log(a, b);
console.log(rest); // {c: 30, d: 40}
/* se por caso colocar um propriedade q nao exite no obj sera undefined */

// Destructuring com valores padrão
const {x, y = 5} = {x : 3, y: 4}
console.log(y)