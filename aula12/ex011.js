var idade = 15
if (idade < 16) { // se a idade é NÃO é menor (<) que 16
    console.log('Não vota')
} else {
    if (idade >= 16 && idade <18) { // obviamente ela é MAIOR ou IGUAL (>=), não precisa disso. Somente assim: if (idade < 18)
        console.log('Voto opcional')
    } else {
        console.log('Voto Obrigatório')
    }
}






// outra forma de fazer

/*


var idade = 22
if (idade < 16){
    console.log ('Não vota')
} else if (idade < 18) {
    console.log ('Voto opcional')
} else {
    console.log('Voto obrigatótio')
}


*/