//POO - Programação Orientada a Objetos

// Classe - é um modelo ou uma estrutura que define
// as características e comportamentos de um objeto. 
// Ela serve como um molde para criar objetos 
// específicos com base nessa definição.

class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  // metodos - são funções associadas a uma classe ou a um objeto,
  // que definem comportamentos ou ações que o objeto pode realizar.
  getFullName() {
   console.log(`${this.firstName} ${this.lastName}`);
  }
  getAge() {
    console.log(this.age);
  }
  speak() {
    console.log('Hello, I am a person!');
  }
}

// Objeto - é uma instância de uma classe, ou seja, 
// é um exemplo concreto criado a partir do modelo definido pela classe.

const person = new Person('John', 'Doe', 30)

// Acessando os métodos do objeto
person.getFullName() // Output: John Doe
person.getAge() // Output: 30

person.speak() // Output: Hello, I am a person!

/*------------------------*/
// Herança - é um princípio da programação orientada a objetos
// que permite criar 
// uma nova classe (chamada de classe filha ou subclasse)
class Animal{
  constructor(name, species){
    this.name = name;
    this.species = species;
  }
  getFullName() {
    console.log(`${this.name} is a ${this.species}`);
  }
  
  AnimalSound() {
    console.log('The animal makes a sound!');
  }


}
 class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog'); // Chama o construtor da classe pai (Animal)
    this.breed = breed;
  }
  DogSound() {
    console.log('Woof! Woof!');
  } 
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.getFullName(); // Output: Buddy is a Dog
dog.DogSound(); // Output: Woof! Woof!
dog.AnimalSound(); // Output: The animal makes a sound!