# Formulário de criação de conta

Projeto de um formulário de cadastro desenvolvido com HTML, CSS e JavaScript. A validação dos campos é feita no navegador antes do envio.

## Funcionalidades

- Validação de campos obrigatórios;
- Verificação do formato do e-mail;
- Exigência de senha com no mínimo 7 caracteres;
- Comparação entre a senha e a confirmação de senha;
- Exibição de mensagens e ícones de erro;
- Destaque visual para campos válidos e inválidos.

Quando todos os campos são válidos, uma mensagem de confirmação é exibida no console do navegador. O projeto não envia nem armazena os dados, pois não possui integração com um servidor.

## Regras de validação

| Campo | Regra |
| --- | --- |
| Nome de usuário | Não pode ficar vazio |
| E-mail | Não pode ficar vazio e deve ter um formato válido |
| Senha | Não pode ficar vazia e deve ter pelo menos 7 caracteres |
| Confirmação de senha | Deve ser igual à senha informada |

## Tecnologias

- HTML5;
- CSS3;
- JavaScript;
- Google Fonts;
- Font Awesome.

Google Fonts e Font Awesome são carregados pela internet. Sem conexão, a fonte e os ícones podem não aparecer, mas a validação continua funcionando.

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta `projetos/formulario`.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências nem executar comandos.

## Estrutura do projeto

```text
formulario/
├── index.html
├── scripts.js
├── styles.css
└── README.md
```

- `index.html`: estrutura e campos do formulário;
- `styles.css`: aparência da página e estados de erro e sucesso;
- `scripts.js`: regras de validação e mensagens apresentadas ao usuário;
- `README.md`: documentação do projeto.

## Como testar

Clique em **Enviar** com os campos vazios para visualizar as mensagens de erro. Depois, preencha todos os campos corretamente. Se o formulário estiver válido, a mensagem `O formulário está 100% válido!` será exibida no console do navegador.
