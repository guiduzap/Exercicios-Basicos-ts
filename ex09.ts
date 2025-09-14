/**
 * Exercício 09 – Função Soma
 * Crie uma função que recebe dois números e retorna a soma.
 */


/* Função somar: Declarando variáveis (A e B);
* definindo os tipos das variáveis e função somar, por final retornando a soma.
*/
function somar(a: number , b: number): number {
    return a + b;
}


// Chamada da função: Cria uma nova variável passando a função somar dentro dela
let resultadoSoma = somar(12,30);
    console.log(`Soma: ${resultadoSoma}`);