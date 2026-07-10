# Relogio

Projeto de um relogio analogico feito com HTML, CSS e JavaScript.

## Sobre o projeto

O objetivo deste projeto e exibir um relogio funcional no navegador, com ponteiros de horas, minutos e segundos sincronizados com o horario atual do computador.

O layout usa CSS para criar o formato circular do relogio, posicionar os numeros e estilizar os ponteiros. O JavaScript calcula a rotacao de cada ponteiro e atualiza a tela a cada segundo.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Google Fonts

## Funcionalidades

- Relogio analogico com numeros de 1 a 12
- Ponteiro de segundos em vermelho
- Ponteiros de minutos e horas em preto
- Atualizacao automatica a cada segundo
- Layout centralizado na tela
- Fundo com gradiente

## Estrutura de arquivos

```text
relogio/
├── index.html
├── styles.css
├── scripts.js
└── README.md
```

## Como executar

1. Abra a pasta do projeto.
2. Abra o arquivo `index.html` no navegador.

Nao e necessario instalar dependencias ou iniciar servidor, pois o projeto usa apenas arquivos estaticos.

## Como funciona

O arquivo `scripts.js` pega a hora atual usando `new Date()` e calcula a porcentagem de rotacao dos segundos, minutos e horas.

Depois, cada ponteiro recebe um valor na variavel CSS `--rotation`, que e usada no `transform: rotate()` para girar os elementos na tela.

## Aprendizados

Este projeto pratica conceitos como:

- Manipulacao do DOM
- Uso de `setInterval`
- Variaveis CSS
- Posicionamento absoluto
- Transformacoes com `rotate`
- Organizacao basica de um projeto front-end
