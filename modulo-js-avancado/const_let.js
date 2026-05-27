
// ─── const ───────────────────────────────────────────
// Usada para valores que NÃO mudam após a atribuição.

const appName = 'JavaScript Avançado';
console.log(appName); // JavaScript Avançado

const PI = 3.14159;
console.log(PI); // 3.14159

// Tentar reatribuir uma const gera erro:
// appName = 'Outro nome'; // TypeError!

// Objetos e arrays declarados com const PODEM ter seu conteúdo alterado:
const user = { nome: 'Ana', idade: 25 };
user.idade = 26; // permitido
console.log(user); // { nome: 'Ana', idade: 26 }

// ─── let ─────────────────────────────────────────────
// Usada para valores que PODEM mudar ao longo do tempo.

let score = 0;
console.log('Score inicial:', score); // 0

score = 10;
console.log('Score atualizado:', score); // 10

let contador = 0;
for (let i = 0; i < 3; i++) {
    contador++;
}
console.log('Contador:', contador); // 3

// ─── Escopo de bloco ─────────────────────────────────
// let e const só existem dentro do bloco {} em que foram declaradas.

if (true) {
    let mensagem = 'Olá do bloco if!';
    const versao = '1.0';
    console.log(mensagem); // Olá do bloco if!
    console.log(versao);   // 1.0
}
 // console.log(mensagem); // ReferenceError - fora do escopo!
 // console.log(versao);   // ReferenceError - fora do escopo!