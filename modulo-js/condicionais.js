// Condicionais

// if e else
const sum = 1 + 2

if (sum === 2) {
  console.log('A soma é igual a 2')
}else{
  console.log('A soma é diferente de 2')
}

// if, else if e else
const number = 10
if (number > 10) {
  console.log('O número é maior que 10')
}else if (number < 10) {
  console.log('O número é menor que 10')
} else {
  console.log('O número é igual a 10')
}


// && - Todas as condições precisam ser verdadeiras para que o resultado seja verdadeiro.
// || - Pelo menos uma condição precisa ser verdadeira para que o resultado seja verdadeiro.
const sum1 = 2 + 2;
const sum2 = 3 + 10;

// &&
if (sum1 === 4 && sum2 === 6) {
  console.log('sum1 is 4 and sum2 is 6!')
}
// ||
if (sum1 === 4 || sum2 === 6) {
  console.log('sum1 is 4 or sum2 is 6!')
}


// Operador ternário

const sumd = 1 + 1;

// Forma tradicional (if/else)
/*
let num;

if (sumd === 2) {
  num = 2;
} else {
  num = 4;
}

console.log(num);
*/

// Forma com operador ternário
// condição ? valor_se_verdadeiro : valor_se_falso
const num = sumd === 2 ? 2 : 4;

console.log(num);

// switch case: testa um valor contra múltiplos casos
const car = 'Fiat';

switch (car) {
  case 'BMW':
    console.log('Carro alemão');
    break;
  case 'Toyota':
    console.log('Carro japonês');
    break;
  case 'Ford':
    console.log('Carro americano');
    break;
  default:
    console.log('Carro desconhecido');
    break;
}