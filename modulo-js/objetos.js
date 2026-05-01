const person = {
  firstname: 'Leticia',
  lastname: 'Alves',
  age: 23,
  city: 'Boa Vista',
  isStudent: false,
  hobbies: [
    'Correr',
    'Viajar',
    'Cozinhar'
  ],
  dog: {
    name: 'Rex',
    age: 5,
  }

  
};
// Acessando as propriedades do objeto
/*const firstname = person.firstname;
const lastname = person.lastname
const age = person.age;
const city = person.city;
const isStudent = person.isStudent;
const hobbies = person.hobbies; */

// Desestruturação de objetos
const { 
  firstname, 
  lastname, 
  age, 
  city, 
  isStudent,
   hobbies, 
   dog:{name:dogName} // Acessando a propriedade do objeto aninhado e atribuindo a uma variável
  } = person;

const cooking = hobbies[2];

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(city);
console.log(isStudent);
console.log(cooking);

/*person.dog = 'Rex';*/

// Acessando a propriedade do objeto aninhado
console.log(person.dog.name);

console.log(dogName);