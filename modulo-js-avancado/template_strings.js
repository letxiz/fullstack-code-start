// Template Strings

const age = 30;
const name = 'John';
const city = 'New York';

// Concatenação tradicional
const messageConcatenada = "Meu nome é " + name + ", tenho " + age + " anos e moro em " + city + ".";
console.log(messageConcatenada);

// Usando template strings
const message = `Meu nome é ${name}, tenho ${age} anos e moro em ${city}.`; 
console.log(message); // Saída: Meu nome é John, tenho 30 anos e moro em New York.

// Template strings também suportam múltiplas linhas
const multiLineMessage = `Esta é uma mensagem que ocupa
múltiplas linhas. Pode incluir variáveis como ${name} e ${age}.`;
console.log(multiLineMessage);  

/* Saída:
Esta é uma mensagem que ocupa
múltiplas linhas. Pode incluir variáveis como John e 30.
*/