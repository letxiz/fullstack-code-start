//Arroy function
function somar (a, b){
  return a + b
}

const somarArrow = (a, b) => {
  return a + b
}

const somarAr = (a , b) => a + b

console.log(somar(3, 5));
console.log(somarArrow(2, 4));
console.log(somarAr(6, 4));

// Exemplos
 function verificarPositivo (numero){
  return numero >= 0;
 }

 const verificarPositivos = number => number >= 0

 console.log(verificarPositivo(12));
 console.log(verificarPositivos(8));



 function retornaObj(){
  return{
    nome: 'Jhon',
    sobreNome: 'Doe',
  }
 }

 const retornaObje = () => ({
  nome:'Jhon', 
  sobreNome: 'Doe'
 })

 console.log(retornaObje());
 console.log(retornaObj());