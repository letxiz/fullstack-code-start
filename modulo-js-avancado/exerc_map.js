/* 1 - Utilizando o.map, crie uma lista que contenha todos os
 os valores da lista "numeros" multiplicados por dois, e logue-a
 no console*/

 const numeros = [ 10,20,30,40,50];

 // resposta foi usado arrow function com retorno implicito
 const numerosMultiplicados = numeros.map((item) => {
  return item * 2
 })
 console.log(numerosMultiplicados)

 /* 2- Crie uma lista usando o .map, baseando na lista
 "usuários", que contenha a "idade" de cada usuario multiplicada
 por 2*/

 const usuario = [
  {
    nome:' John',
    idade: 20
  },
  {
    nome: 'Jane',
    idade: 27
  },
  {
    nome:'Doe',
    idade: 18
  }
 ]

 // resposta ( foi usado spread)
 const usuariosComIdadeMultiplicadoPor2 = usuario.map(usuario => {
  return {...usuario, idade: usuario.idade * 2}
 })
 console.log(usuariosComIdadeMultiplicadoPor2)

 /* 3 - Crie uma lista com 7 números gere uma nova com o 
   quadrado de todos os pares da primeira*/

   //lista do numeros
    const number = [1, 2, 3, 4, 5, 6, 7];

    const quadradoPar = number.map(item => {
      if (item % 2 == 0){
        return item ** 2
      }
    })
    console.log(quadradoPar)

/* 4- Dada uma lista, [2, 3, 6, 9]
 Altere ela para que se torne [2, 3, 4, 5, 6, 7, 8, 9] */

 const n = [2, 3, 6, 9];

 const nvLista = [
  ...n.slice(0, 2),
  4,
  5,
  6,
  7,
  8,
  9
 ]
 console.log(nvLista)

 // Exemplo em for 

 const nF = [2, 3, 6, 9, 11];

 const novaLista = [];

 for(let i = 0; i < nF.length - 1; i++){
  const at = nF[i]
  const pr = nF[i + 1];

  novaLista.push(at);

  for(let ns = at + 1; ns < pr; ns ++){
    novaLista.push(ns);
  }
 }

 novaLista.push(nF[nF.length - 1]);

 console.log(novaLista)