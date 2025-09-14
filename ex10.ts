/**
 * Exercício 10 – Calculadora simples
 * Função que recebe dois números e uma operação (+, -, *, /).
 * Retorna o resultado. Trata divisão por zero.
 */


// PROCESSO: Função calcular que recebe 3 parâmetros: a, b e operacao
function calcular(a: number, b: number, operacao: string): number {

    // Realiza o cálculo em todas as operações abaixo
    if(operacao == "+") return a + b;
    if(operacao == "-") return a - b;
    if(operacao == "*") return a * b;
    if(operacao == "/") {
        if(b === 0) {
            console.log("Erro: Divisão por zero.");
            return NaN; // NaN: Not a number
        }
        return a / b;
    }
    console.log("Operação inválida, utilize +, -, * ou /.");
    return NaN; // NaN: Not a number
}
// Neste caso, o valor está introduzido direto na saída
console.log(`10 + 5 = ${calcular(10,5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);