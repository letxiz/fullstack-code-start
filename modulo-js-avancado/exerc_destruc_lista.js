/* 1. Asinale uma variaável pra cada valor a lista "numeros"
 tilizando Destructuring, e logue-os no console */

 const numeros = [ 1, 2, 3, 4, 5]

  /*Resposta*/
 const [um, dois, tres, ...resto] = numeros;

 console.log(um);
 console.log(dois);
 console.log(tres);
 console.log(resto);


 /* 2. Inverta os valores de a e b utilizando Destructuring, e logue-os no console */

 let  a = 5;
 let b = 10;

 /*Resposta*/
 [a, b] = [b, a];

 console.log(a);
 console.log(b);

 /* 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo",
  utilizando o Spread Operator, e adicione mais 3 séries a essa nova lista. 
  Logue a nova lista no console */

  const melhoresSeriesDoMundo = ["Breaking Bad", "Game of Thrones", "The Wire"];
  
  /*Resposta*/
  const novasSeries = [...melhoresSeriesDoMundo, "Stranger Things", "The Crown", "The Mandalorian"];
  console.log(novasSeries);

/* 4. Assinale dois primeiros valores da lista "sobremesas",
a duas variáveis, e distribua o restante apenas em uma, utilizando 
o Spread Operator, e logue-as no console.  */

const sobremesas= [ 'Sorvete', 'Petit Gateau', 'Açai', 'Mousse de Maracujá', 'Brigadeiro' ];

 /*Resposta*/
const [primeira, segunda, ...restoSobremesas] = sobremesas;

console.log(primeira);
console.log(segunda);
console.log(restoSobremesas);
