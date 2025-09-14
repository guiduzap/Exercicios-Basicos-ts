/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 */


function jurosCompostos(capital: number, taxa: number, tempo: number): number {
    return capital * Math.pow(1 + taxa, tempo);
}

let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;

let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros Compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);

