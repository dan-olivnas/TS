import leia = require("readline-sync");

const cores: Array<string> =new Array <string>;

for (let i=0; i < 5; i++) {
let cor: string = leia.question('Informe uma cor: ');
    cores.push(cor);
}

console.log('As cores informadas foram: \n' + cores);

let coresOrdem = cores.sort();

console.log('As cores em ordem alfabética são: \n' + (coresOrdem));
