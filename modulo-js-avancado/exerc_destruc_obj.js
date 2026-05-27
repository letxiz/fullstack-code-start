/*1. Acesse as propriedades "tamanahoDaBarba", "idade",
e "famalia" dp objeto "viking" por meio de Destructuring, e 
logue-as no console*/

const viking = {
  familia :'Lothbrok',
  tamanhoDaBarba: 'enorme',
  idade:30
}
/*Resposta*/
const {familia, tamanhoDaBarba, idade} = viking
console.log(familia);
console.log(tamanhoDaBarba);
console.log(idade);

/* 2. Acesse as propriedades "name", "age"do objeto "usuario"
 por meio de Destructuring,e nomea-las para tradução em português e logue-as no console */

 const usuario = {
  name : 'Jane Doe',
  age : 28,

 }
  /*Resposta*/
  const {name: nome, age: idadeUsuario} = usuario;
  console.log('Nome:', nome);
  console.log('Idade:', idadeUsuario);
/* 3. Acesse, utilizando Destructuring,
 todas as propriedades dentro do objetos
 "dadosPessoais" e "dadosProfissionais" do 
  objeto "piloto", e logue-as no console */

  const piloto = {
    dadosPessoais: {
      nome: 'Ayrton Senna',
      idade: 34,
    },
    dadosProfissionais: {
      categoria: 'Fórmula 1',
      vitórias: 41,
    },
  }

  /*Resposta*/
  const {dadosPessoais: {nome: nomePiloto, idade: idadePiloto}, dadosProfissionais: {categoria, vitórias}} = piloto;

  console.log('Nome:', nomePiloto);
  console.log('Idade:', idadePiloto);
  console.log('Categoria:', categoria);
  console.log('Vitórias:', vitórias);

  /*4. Assinale as propriedades "a" e "b"
  do objeto abaixo a duas variáveis, 
  e distribua as restantes*/

  const obj = { a: 10, b: 20, c: 30, d: 40};

  /*Resposta*/
  const {a, b, ...resto} = obj;
  console.log('a:', a);
  console.log('b:', b);
  console.log('resto:', resto);