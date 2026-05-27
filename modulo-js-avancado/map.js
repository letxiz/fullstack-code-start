// map - cria um novo array e preenche com o resultado da 
// função callback aplicada a cada elemento do array original

/* o map adiciona na nova listan q ele vai gerar 
   oq é retornado nessa na função q passamos para ele  */

const numeros = [ 1, 2, 3];

// arrow function com return implícito
const number = numeros.map((item) => {
  return item * 2
})
console.log(number);

// criando uma lista
const usuarios = [
  {
    nome: 'Joe',
    idade: 20,
  },
  {
    nome:'Doe',
    idade: 40,
  }
]

// gera uma nova lista com a idade multiplicada por 2
const usuariosComIdadeMultiplicadoPor2 = usuarios.map(
  (item, index) =>{
    // usando o spread operator para criar um novo objeto com as mesmas propriedades do item original
    return {...item, idade: item.idade * 2}
    //return item.idade * 2
})
console.log(usuariosComIdadeMultiplicadoPor2);
