
// 2. Utilizando (DoWhile), elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.


let somatorio: number = 0;
let Numero: number = 1;

do {
    if (Numero % 2 === 0) { 
        somatorio += Numero; 
    }
    Numero++; 
} while (Numero <= 500); 

console.log(`O somatório dos valores pares de 1 até 500 é: ${somatorio}`);