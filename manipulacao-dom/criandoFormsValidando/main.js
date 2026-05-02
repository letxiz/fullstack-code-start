// Selecionando os elementos do formulário
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener('click', (event) => {
    // Previne o comportamento padrão do formulário (envio)
    event.preventDefault();
    // Obtém os valores dos campos de entrada
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    // Valida os campos de entrada
    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.classList.add('error');
        setTimeout(() => {
        errorMessage.textContent = '';
        errorMessage.classList.remove('error');
        }, 3000);
        return;
    }
    // Limpa a mensagem de erro se os campos estiverem preenchidos
    //errorMessage.textContent = '';
    //errorMessage.classList.remove('error');
    // Exibe os valores no console
    console.log('Nome:', nameValue);
    console.log('Email:', emailValue);

    // Cria um novo elemento de lista para exibir os dados
   const li = document.createElement('li'); // Cria um novo elemento de lista
   li.classList = 'item' // Adiciona a classe 'item' ao elemento de lista
   li.innerHTML = `Nome: ${nameValue} <br /> Email: ${emailValue}`; // Define o conteúdo de texto do elemento de lista
   items.appendChild(li); // Adiciona o elemento de lista como filho do elemento com a classe 'items'

   nameInput.value = '';
   emailInput.value = '';
});