const numeros =[1, 2, 3, 4];

// tradicional
/*const primeiroNumero = numeros[0];
const segundoNumero = numeros[1];
const terceiroNumero = numeros[2];
const quartoNumero = numeros[3];
console.log(primeiroNumero);
console.log(segundoNumero);
console.log(terceiroNumero);
console.log(quartoNumero);*/

//Destructuring
const [primeiroNumero, segundoNumero, ...restoDosNumeros] = numeros;  
console.log(primeiroNumero); // 1
console.log(segundoNumero); // 2
console.log(restoDosNumeros); // [3, 4]

// Trocando os valores de a e b usando destructuring
let a = 1;
let b = 3;

[a, b] = [b, a]; // troca os valores de a e b
console.log(a); // 3
console.log(b); // 1

// Spread operator
const numeros2 = [5, 6, 7, 8];

const numerosCom9e10 = [ ...numeros2, 9, 10,]; // adiciona os elementos de numeros2 ao final do array
console.log(numerosCom9e10); // [5, 6, 7, 8, 9, 10]


// ignorando valores do array usando destructuring
const [dez, vinte,... resto] = [10, 20, 30, 40]; // ignorando os valores do array

console.log(resto); // [30, 40]
