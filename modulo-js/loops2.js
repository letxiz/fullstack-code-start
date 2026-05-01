let index = 0;

while(index < 10) {
    console.log('index é menor que 10');
    index++;
}

const person ={
    name: 'John',
    age: 30,
    city: 'New York'
}
// for in é usado para iterar sobre as propriedades de um objeto.
for(property in person) {
    console.log(person[property]);
}