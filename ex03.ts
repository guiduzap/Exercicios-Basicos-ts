/*
Exercício 03 – Par ou Ímpar
Dado um número, diga se é par ou ímpar.
*/

// Define a variável a ser usada, seu tipo e valor correspondente;
let numero: number = 20;


// Verifica se numero é impar ou par divindo por zero, se houver resto é ímpar (=== - Operador de igualdade restrita)
if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
    } else {
    console.log(`${numero} é impar.`);
}
