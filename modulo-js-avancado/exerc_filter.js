/* 1- Crie uma lista que contenha apenas os valores que
 são maiores de 5 da lista "numeros"*/

 const numeros = [3, 6, 8, 2];

 // resposta
 const numerosMaioresDoQue5 = numeros.filter(item =>{
  return item > 5;
 })
 console.log(numerosMaioresDoQue5)

 

 /* 2- Crie uma lista que contenha apenas os valores pares 
 da lista "numeros2"*/

 const numeros2 = [ 1, 2, 3, 4, 5, 6, 7, 8]

 const numerosPares = numeros2.filter(item =>{
 // mesma coisa do return
  /*if (item % 2 === 0){
      return true
    }else{
      return false
    }
*/
  return item % 2 === 0
 })
 console.log(numerosPares)


 /* 3- Crie uma lista que contenha apenas as pessoas q tem idade
  o suficiente pra fazer parte da Matriz ( a idade minima é 18 anos)*/
  
  const pessoas = [
    {nome: 'Angeline Jolie', idade: 50},
    {nome: 'Eric Jones', idade: 22},
    {nome: 'Paris Hilton', idade: 5},
    {nome: 'Kanye West', idade: 16},
    {nome: 'Frank Ocean', idade: 18}
  ];

  const pessoasMatrix = pessoas.filter(item => {
    return item.idade >= 18
  })
  console.log(pessoasMatrix)
