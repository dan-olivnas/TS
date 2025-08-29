import leia from 'readline-sync'
import { Queue } from './queue'

const fila = new Queue <string> ()
let continuar: boolean = true
let opcao: number

do {
console.log(
`
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
            ★ Selecione uma opção: ★                                   
                                                                       
            1 - Adicionar Cliente na Fila                              
            2 - Listar todos os Clientes                               
            3 - Retirar Cliente da Fila                                
            0 - Sair                                                   
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`);

opcao = leia.questionInt()

switch (opcao){
    case 1:
    let nome: string = leia.question('Digite o nome: ')
    fila.enqueue(nome)
    console.log('-------------------------------------')
    console.log('Pessoas atualmente na fila: \n');
    fila.printQueue()
        break;

    case 2:
   
    if (fila.isEmpty()) {
        console.log('A fila está vazia.');
    }
    else {console.log('Lista de pessoas na fila: ');
        fila.printQueue()
    }    break;

    case 3:
    if (fila.isEmpty()) {
        console.log('A fila está vazia!');
    } else {
        console.log(fila.peek() + ' foi chamado/a/e.')
        fila.dequeue()
    }   break;

    case 0 :
    console.log('Obrigado por utilizar o nosso sistema!');
    continuar = false
        break;

    default:
       console.log('Opção inválida!');
       break;
}
} while (continuar === true)




