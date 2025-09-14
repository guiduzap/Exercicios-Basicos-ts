/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 */

// Define a função juros simples e suas variáveis, retornando o cálculo de juros
function jurosSimples(capital: number, taxa: number, tempo: number): number {
    return capital + (capital * taxa * tempo);
}

// Define o valor de cada variável
let capital = 1000;
let taxa = 0.05;
let tempo = 12;

// Define uma nova variável com base nos parâmetros daquela já criada
let vfSimples = jurosSimples(capital, taxa, tempo); {
    console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`); // toFixed(2) - Valor final com somente 2 decimais
}


