# Clima Hoje

Interface de uma aplicação de previsão do tempo. A página apresenta o clima atual, a previsão por hora, os detalhes climáticos e a previsão dos próximos sete dias.

## Informações exibidas

- Cidade e temperatura atual;
- Chance de chuva;
- Previsão por horário;
- Sensação térmica;
- Velocidade do vento;
- Índice UV;
- Temperaturas máxima e mínima da semana.

## Estado atual do projeto

Este projeto implementa somente a interface. As informações meteorológicas são fixas no HTML e não são obtidas de uma API. O campo de busca também não executa pesquisas.

## Responsividade

Em telas com até `540px`, o conteúdo passa a usar uma única coluna, os detalhes climáticos são organizados em duas colunas e a previsão por hora permite rolagem horizontal.

Existe uma media query reservada para tablets entre `541px` e `1024px`, mas ela ainda não possui regras específicas.

## Tecnologias

- HTML5;
- CSS3;
- Flexbox;
- CSS Grid;
- Media queries;
- Google Fonts;
- Imagens SVG.

A fonte Poppins é carregada pela internet. Os ícones meteorológicos estão incluídos no próprio projeto.

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta `projetos/previsao-do-tempo`.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

## Estrutura do projeto

```text
previsao-do-tempo/
├── images/
│   └── arquivos SVG usados na interface
├── index.html
├── styles.css
├── mobile.css
├── image.png
├── image-1.png
└── README.md
```

- `index.html`: estrutura e dados exibidos na página;
- `styles.css`: layout principal e aparência dos componentes;
- `mobile.css`: ajustes para telas menores;
- `images/`: logotipo e ícones meteorológicos;
- `image.png` e `image-1.png`: capturas das versões desktop e mobile.

## Próximos passos

- Integrar uma API de previsão do tempo;
- Fazer a busca por cidade funcionar;
- Atualizar os dados da interface com JavaScript;
- Tratar carregamento, cidade não encontrada e falhas de conexão;
- Completar os ajustes para tablets.

## Prévia

### Desktop

![Prévia da aplicação em desktop](image.png)

### Mobile

<img src="image-1.png" alt="Prévia da aplicação em tela menor" width="300">
