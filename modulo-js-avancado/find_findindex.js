/*find- é parecido com filter, 
as ele retorna apenas o primeiro 
elemento que satisfaz a condição*/

const pessoas = [
    {
      nome: 'Luiz', idade: 62
    },
    {
      nome: 'Maria', idade: 23
    },
    {
      nome: 'Eduardo', idade: 55
    },
  ]
const maria = pessoas.find(function(item){
    return item.nome === 'Maria'
})
console.log(maria)

/*findIndex- é parecido com find,mas ele retorna 
o índice do primeiro elemento que satisfaz a condição*/

const mariaIndex = pessoas.findIndex(function(item){
    return item.nome === 'Maria'
})
console.log(mariaIndex)