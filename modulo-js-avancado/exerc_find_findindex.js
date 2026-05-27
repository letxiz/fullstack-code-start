/* 1- Encontre na lista abaixo que tenha o valor "Japan"
como "país", guarde em uma variável e  logue-a no console. */

const foguetes = [
  { pais: 'Russia', lancamento: 32 },
  { pais: 'Japan', lancamento: 3 },  
  { pais: 'EUA', lancamento: 23 },
  { pais: 'China', lancamento: 16 },
  { pais: 'India', lancamento: 4 },
  { pais: 'Europe', lancamento: 7 }
]
const fogueteJapan = foguetes.find(function(item){
    return item.pais === 'Japan'
})
console.log(fogueteJapan)

/* 2- Encontre, na lista abaixo, a posição que se encontra o item
com o 'titulo' igual a ' Carro de Fórmula 1', guarde-a em uma
variável e logue-a no console. */

const listaDesejos = [
  {
    titulo: 'Tesla Pro',
    quantidadeEstoque: 0,
  },
  {
  titulo: 'MacBook Pro',
  quantidadeEstoque: 10,
  },
  {
    titulo: 'Carro de Fórmula 1',
    quantidadeEstoque: 1,
  },
]
 const f1Index = listaDesejos.findIndex((item) => {
  return item.titulo === 'Carro de Fórmula 1'

 })
 console.log(f1Index)