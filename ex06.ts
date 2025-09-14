/*
Exercício 06 – Aprovado com faltas
Regra: aprovado se nota >= 7 E faltas <= 10.
Caso contrário, reprovado.
*/

var materia: string = "Matemática";
var nota: number = 9;
var faltas: number = 12;


if(nota >= 7 && faltas <= 10) {
    console.log(`Aprovado em ${materia} (Nota: ${nota} - Faltas: ${faltas})`);
    } else {
        console.log(`Reprovado em ${materia} (Nota: ${nota} - Faltas: ${faltas})`);
    }
