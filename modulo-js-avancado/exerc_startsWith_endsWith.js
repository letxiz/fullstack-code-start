/* 1- Guarde em uma variável se a string abaixo começa
com 'Meu', e logue-a no console*/

const mensage = 'Olá, meu nome é Leticinha'

const msgComecaComMeu = mensage.startsWith('Meu');
console.log(msgComecaComMeu)

/* 2- Guarde em uma variável se a string abaixo, a
partir da posição 4, começa com 'meu', e logue-a no console.*/

const mensage2 = 'Olá, meu nome é Frank Ocean';

const msg2ComecaComPosição4 = mensage2.startsWith('meu', 4);
console.log(msg2ComecaComPosição4)


/* 3. Guarde em uma variável se a string abaixo termina com
 "Doe", e logue-a no console.*/

 const mensagem3 = 'Olá, meu nome é Doe';

 const msg3TerminaComDoe = mensagem3.endsWith('Doe');
console.log(msg3TerminaComDoe)