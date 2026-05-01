// map - cria uma nova lista aplicando 
// uma função a cada item da lista original,
// transformando seus valores conforme especificado.
const numbers = [1, 2, 3, 4, 5]

// Função tradicional
const doubleNumbers = numbers.map(function(item) {
  return item * 2
})

console.log(doubleNumbers)

// Arrow Function
const doubleNumbersArrow = numbers.map(number => number * 2)

console.log(doubleNumbersArrow)

// filter - cria uma nova lista contendo apenas os itens
// da lista original que satisfazem uma condição especificada.

const ages = [12, 17, 18, 21, 15, 30]

// Função tradicional
const adultsTraditional = ages.filter(function(age) {
  return age >= 18
})
console.log(adultsTraditional)

// Arrow Function
const adults = ages.filter(age => age >= 18)
console.log(adults)

// reduce - reduz uma lista a um único valor, aplicando
// uma função acumuladora a cada item da lista, 
// resultando em um valor final.

// Função tradicional
const totalAgesTraditional = ages.reduce(function(accumulator, age) {
  return accumulator + age
}, 21)
console.log(totalAgesTraditional)

// Arrow Function
const totalAges = ages.reduce((accumulator, age) => accumulator + age, 0)
console.log(totalAges)
