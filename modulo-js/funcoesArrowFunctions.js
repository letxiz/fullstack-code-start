// Função tradicional
function soma(a, b) {
  return a + b
}
console.log(soma(2, 3))

// Arrow Function
const somaArrow = (a, b) => {
  return a + b
}
console.log(somaArrow(2, 8))

// Arrow Function com retorno implícito
const somaArrowImplícita = (a, b) => a + b
console.log(somaArrowImplícita(5, 10))

// Função tradicional sem parâmetros
function saudacaoTradicional() {
  return 'Olá, mundo!'
}
console.log(saudacaoTradicional())

// Arrow Function sem parâmetros
const saudacao = () => 'Javascript!'
console.log(saudacao())
