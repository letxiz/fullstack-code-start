//Enquanto a condição for verdadeira, 
// o código dentro do bloco será executado. 
// O loop for é útil quando sabemos de antemão 
// quantas vezes queremos que o código seja executado.

/*for(let index = 0; index < 5; index++) {
console.log(index);
}*/

const cars =[
    'Ferrari',
    'Lamborghini',
    'Porsche',
    'Bugatti',
    'McLaren'
];

//  forma tradicional
/*for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}*/

// forma mais moderna
/*for(let car of cars) {
    console.log(car);
}*/

cars.forEach(function(car,index) {
    console.log(car, index);
});

cars.forEach((car) => {
    console.log(car);
});

