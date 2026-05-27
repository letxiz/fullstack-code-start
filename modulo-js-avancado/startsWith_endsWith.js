/* StartsWith - verifica se uma string começa com determinado texto,
considerando diferenciação entre maiúscula e minúscula.
 */

/* EndsWith - verifica se uma string termina com determinado texto,
considerando diferenciação entre maiúscula e minúscula.*/


// startWith
const texto = 'Ser ou não ser, eis a questão'

const comecaComSer = texto.startsWith('não ser',7) // exemplo usando index

console.log(comecaComSer)


//endsWith
const terminaComQuestão = texto.endsWith('questão')
console.log(terminaComQuestão)


