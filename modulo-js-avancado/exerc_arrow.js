// 1. Converta as funções abaixo para Arrow Functions.

// tradicional
 function somar(a, b){
  return a + b ;
 }
 
 // arrow function
 const somar = (a, b) => a + b

  // tradicional
 function verificaNgativo(numero){
   return numero < 0
 }
  // arrow function
 const verificaNgativo = numero => numero < 0

   // tradicional
 function criarUsuario(nome, idade){
  return {
    nome,
    idade,
  }
 }
  // arrow function
 const criarUsuario = (nome, idade) => ({
  nome,
  idade,
 })