/*
Exercício 05 – Média de Notas
Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
*/

let n1: number = 7;
let n2: number = 5;
let n3: number = 9;

// Soma os 3 valores e divide por 3 para retornar a média
let media: number = (n1 + n2 + n3) / 3;

console.log(`Média: ${media.toFixed(2)}`); // toFixed(2) - Fixa o valor para mostrar somente 2 casas decimais ao invés de uma dízima

    if (media >= 6) {
        console.log(`Aprovado`);
        } else {
        console.log("Reprovado");
    }