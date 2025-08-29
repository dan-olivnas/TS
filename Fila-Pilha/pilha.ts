import leia from 'readline-sync'
import { Stack } from './stack';

const pilha = new Stack <string> ();
let continuar: boolean = true
let opcao: number

do {
console.log(
`
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
            ★ Selecione uma opção: ★                                   
                                                                       
            1 - Adicionar livro na pilha                             
            2 - Listar todos os livros                               
            3 - Retirar um livro da pilha                                
            0 - Sair                                                   
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`);

opcao = leia.questionInt()

switch (opcao){
    case 1:
    let livro: string = leia.question('Digite o nome do livro: ')
    pilha.push(livro)
        break;

    case 2:
    if (pilha.isEmpty()) {
        console.log('A pilha está vazia!');
    } else {
    console.log('Lista de livros atualmente na pilha: \n');
    pilha.printStack()
        break;  
    }
    case 3:
    if (pilha.isEmpty()) {
        console.log('A pilha está vazia!');
    } else {      
        console.log('O livro ' + pilha.pop() + ' foi removido.')
    }   break;

    case 0 :
    console.log('Obrigado por utilizar o nosso sistema!');
    continuar = false
        break;

    default:
       console.log('Opção inválida!');
       break;}
} while (continuar)