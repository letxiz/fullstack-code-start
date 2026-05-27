class Animal{
  constructor(nome){
    this.nome = nome;
  }

  falar(){
    console.log(`${this.nome} faz barulho`);
  }
  
}
new Animal('Simba').falar(); // Simba faz barulho

class Cachorro extends Animal{ 
  falar(){
    console.log(`${this.nome} late`);
  }
}
new Cachorro('Rex').falar(); // Rex late