// Manipulacao do DOM - Selecionando elementos

// 1) Seleciona pelo id.
const titulo = document.getElementById('add-user');
titulo.innerText = 'Adicionar Usuario';

// 2) Seleciona o primeiro elemento com a classe.
const mensagem = document.querySelector('.msg');
mensagem.innerText = 'Preencha os campos abaixo';

// 3) Seleciona o primeiro input da pagina (por tag).
const primeiroInput = document.querySelector('input');
primeiroInput.placeholder = 'Digite seu nome';

// 4) Seleciona todos os inputs e retorna uma lista.
const todosInputs = document.querySelectorAll('input');
console.log('Quantidade de inputs:', todosInputs.length);

// 5) Seleciona por id usando querySelector.
const botao = document.querySelector('#submit-button');
botao.value = 'Enviar';

