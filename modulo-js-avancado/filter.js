// filter() - é utilizado para criar uma nova lista a 
// partir de uma lista existente, com base em um teste que definimos.

// tem q ser true, parece o map mas so retorna se passar no teste!
const numeros = [5 , 10, 15, 20, 50, 80]

const numerosMaioresDoQue10 = numeros.filter((item)=>{
  return item > 10
})
console.log(numerosMaioresDoQue10)

const usuario = [
  {
    nome:'Steve Jobs',
    idade: 21
  },
  {
    nome: 'Elun Musgue',
    idade: 37
  },
  {
    nome: 'Slash',
    idade : 17
  }
]

const usuariosMaioresDeIdade = usuario.filter((item) => {
  return item.idade >= 18
}
)
console.log(usuariosMaioresDeIdade)


