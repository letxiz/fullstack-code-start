# Calculadora

Projeto de uma calculadora simples feita com HTML, CSS e JavaScript.

A aplicação permite fazer operações matemáticas básicas direto pelo navegador, usando botões na tela.

## Funcionalidades

- Inserir números e casas decimais.
- Somar, subtrair, multiplicar e dividir.
- Apagar o último caractere digitado com `DEL`.
- Limpar toda a operação com `AC`.
- Mostrar a operação anterior e o valor atual no visor.
- Impedir mais de um ponto decimal no mesmo número.
- Calcular operações em sequência.

## Operações disponíveis

| Botão | Função |
| --- | --- |
| `+` | Soma |
| `-` | Subtração |
| `*` | Multiplicação |
| `÷` | Divisão |
| `=` | Mostra o resultado |
| `DEL` | Apaga o último número digitado |
| `AC` | Limpa a calculadora |

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript
- Google Fonts

## Como executar

1. Abra a pasta do projeto:

```bash
projetos/calculadora
```

2. Abra o arquivo `index.html` no navegador.

Não precisa instalar dependências.

## Estrutura do projeto

```text
calculadora/
├── index.html
├── scripts.js
├── styles.css
└── README.md
```

## Como usar

1. Clique nos números para montar o primeiro valor.
2. Escolha uma operação.
3. Digite o segundo valor.
4. Clique em `=` para ver o resultado.

Exemplo:

```text
8 + 2 = 10
```

## Observações

- A calculadora funciona apenas com cliques nos botões da tela.
- O teclado físico não está configurado neste projeto.
- A divisão por zero não tem tratamento especial.
- A fonte Roboto vem do Google Fonts, então precisa de internet para carregar corretamente.
