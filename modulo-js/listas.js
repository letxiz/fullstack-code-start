const names = ['Leticia', 'João', 'Julia', 10, false];

const joao = names[1];

names.push('Maria'); // Adiciona um elemento no final da lista
names.unshift('Lucas'); // Adiciona um elemento no início da lista

names.pop(); // Remove o último elemento da lista
names.pop(); // Remove o último elemento da lista
names.pop(); // Remove o último elemento da lista

names[3] = 'Carlos'; // Altera o elemento na posição 3 da lista
console.log(names);

