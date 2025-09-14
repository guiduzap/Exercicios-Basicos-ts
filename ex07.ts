/**
 Exercício 07 – Tabuada
 Mostre a tabuada de 1 a 10 de um número.
 */

 // Variável base: Número a ser multiplicado
let base: number = 7;


/* Define i como 1;
* Para cada i que for menor ou igual a 10, adicione +1 (laço de repetição)
*/
for (let i = 1; i <= 10; i++){
    console.log(`${base} x ${i} = ${base * i}`)
}