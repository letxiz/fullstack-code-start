# Projeto: Lista de Tarefas

Aplicação simples de lista de tarefas desenvolvida para praticar os fundamentos de **HTML**, **CSS** e **JavaScript**, com foco em **manipulação de DOM**, **eventos** e **armazenamento local**.

## Objetivo

Construir uma interface funcional onde seja possível:

- adicionar novas tarefas;
- marcar tarefas como concluídas;
- remover tarefas;
- manter os dados salvos no navegador mesmo após recarregar a página.

## Funcionalidades

- Campo de texto para digitar a tarefa.
- Botão para adicionar tarefa.
- Validação para evitar tarefas vazias.
- Clique no texto da tarefa para alternar entre concluída e não concluída.
- Ícone de lixeira para excluir uma tarefa.
- Persistência de dados usando `localStorage`.

## O Que Foi Abordado

### HTML

- Estrutura base da página.
- Organização dos blocos da aplicação (`container`, formulário de tarefa e lista).
- Inclusão de fontes externas (Google Fonts) e ícones (Font Awesome).

### CSS

- Reset básico com seletor universal.
- Layout centralizado com Flexbox.
- Estilização de componentes (input, botão e lista).
- Estados visuais com classes utilitárias:
	- `.error` para campo inválido;
	- `.completed` para tarefa concluída.
- Efeitos visuais com `hover` e `transition`.

### JavaScript

- Seleção de elementos com `querySelector`.
- Manipulação dinâmica do DOM com:
	- `createElement`;
	- `appendChild`;
	- `classList.add`, `classList.remove` e `classList.toggle`.
- Tratamento de eventos com `addEventListener`.
- Criação de funções para separar responsabilidades:
	- validação de entrada;
	- adição de tarefa;
	- conclusão de tarefa;
	- remoção de tarefa;
	- sincronização com `localStorage`.
- Conversão de dados com `JSON.stringify` e `JSON.parse`.

## Estrutura do Projeto

- `index.html`: estrutura da interface.
- `styles.css`: estilos da aplicação.
- `scripts.js`: lógica da aplicação.

## Como Executar

1. Abra a pasta do projeto.
2. Execute o arquivo `index.html` no navegador.
3. Digite uma tarefa e clique em **Adicionar**.

## Aprendizados Práticos

Este projeto reforça a base de front-end ao conectar **estrutura (HTML)**, **apresentação (CSS)** e **comportamento (JavaScript)** em um fluxo real de uso, incluindo persistência de dados no navegador.

Print de como ficou:

<img src="image.png" alt="Print de como ficou" width="500" />