/* Reduce método de array que reduz um array a um único valor, 
aplicando uma função a um acumulador e 
a cada elemento do array. */

const foguetes = [
  {pais:'Russia', lancamentos: 32},
  {pais:'EUA', lancamentos: 23},
  {pais:'China', lancamentos: 16},
  {pais:'Europa', lancamentos: 7},
  {pais:'India', lancamentos: 4},
  {pais:'Japão', lancamentos: 3}
]

const totalLancamentos = foguetes.reduce((acumulador, item) => {
  return acumulador + item.lancamentos
}, 0) // o zero é o valor inicial do acumulador

console.log(totalLancamentos)

/* Exemplo de reduce pode ser usado também*/

const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) // o zero é o valor inicial do acumulador

console.log(soma) // 15

