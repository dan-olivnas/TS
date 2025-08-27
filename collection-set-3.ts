import leia = require("readline-sync");

const setNumeros: Set<number> = new Set<number>

for (let i=0; i < 10; i++) {
let numero: number = leia.questionInt('Informe um numero: ');
setNumeros.add(numero)
} 

console.log('Os numeros informados foram: \n');

for (let numero of setNumeros) {
    console.log(numero)
}
