/*
Exercício 05 – Média de Notas
Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
*/

// Define as variáveis de entrada, tipos e valores fixos;
let n1: number = 7;
let n2: number = 5;
let n3: number = 9;

// Processa a soma dos 3 valores passados pelas variáveis e divide por 3 para retornar a média
let media: number = (n1 + n2 + n3) / 3;

// Formata o valor da média antes de chegar na saída, para ter apenas 2 casas depois da vírgula
console.log(`Média: ${media.toFixed(2)}`); 


/* Saída: Se a média for maior ou igual a 6: Aprovado;
* Caso contrário: Reprovado
*/
    if (media >= 6) {
        console.log(`Aprovado`);
        } else {
        console.log("Reprovado");
    }