/* some = retorna true se algum elemento na lista corresponde ao teste */
/* every = retorna true se todos os elementos na lista correspondem ao teste */


// some - verifica se algum elemento do array é maior que 10
const numeros = [1, 2, 3, 4, 5];

const maiorQue10 = numeros.some(num => num > 10); // arrow function
console.log(maiorQue10); 

// every - verifica se todos os elementos do array são maiores que 0
const todosMaioresQue0 = numeros.every(num => num > 0);
console.log(todosMaioresQue0);