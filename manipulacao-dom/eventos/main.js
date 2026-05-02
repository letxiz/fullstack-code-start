// Seleciona o botão de envio do formulário
const submitButton = document.querySelector('#submit-button');
const myForm = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');

const body = document.querySelector('body');

submitButton.addEventListener('click', function(event) {
    // Previne o comportamento padrão do formulário (envio)
    event.preventDefault();

   // Obtém os valores dos campos de entrada
   const nameValue = nameInput.value;
   const emailValue = emailInput.value;
    // Exibe os valores no console
   //console.log('Nome:', name);
   //console.log('Email:', email);

   if(nameValue === '' || emailValue === '') {
     return alert('Por favor, preencha todos os campos.');

   }
   
   myForm.style.backgroundColor = 'red';
   items.firstElementChild.textContent = nameValue;
   items.children[1].textContent = emailValue;

  body.style.backgroundColor = '#f0f0f0';
});  





  // Adiciona um evento de mudança ao campo de nome
    /*nameInput.addEventListener('change', function(e) {
    console.log(e.target.value);
   
})*/
