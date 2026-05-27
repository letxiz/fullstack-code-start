/*const usuario = {
  nome : 'João',
  login(){
    console.log(`${this.nome} fez login`); // this se refere ao objeto usuario
  },
  logout(){
    console.log(`${this.nome} fez logout`); // this se refere ao objeto usuario
  }
}
usuario.login(); // Chama o método login, this.nome é 'João'
usuario.logout(); // Chama o método logout, this.nome é 'João'*/

class Usuario {
  constructor(nome) {
    this.nome = nome;
  }

  static helloWorld() {
    console.log('Hello World');
  }

  login() {
    console.log(`${this.nome} fez login`); // this se refere à instância do objeto Usuario
  }
  logout() {
    console.log(`${this.nome} fez logout`); // this se refere à instância do objeto Usuario
  }
}
const usuario = new Usuario('Maria');
const usuario2 = new Usuario('Carlos');

usuario.login(); // Chama o método login, this.nome é 'Maria'
usuario2.logout(); // Chama o método logout, this.nome é 'Carlos'

Usuario.helloWorld(); // Chama método static sem instanciar
