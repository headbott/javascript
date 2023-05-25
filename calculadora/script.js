function calcular() {
    let num1 = document.getElementById('txtn1')
    let num2 = document.getElementById('txtn2')
    let res = document.getElementById('res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let c = ''

    // fazer aparecer um alerta em qual caixa está faltando um número
    if (num1.value.length == 0 || num2.value.lenght == 0) {
        window.alert('Digite um valor!')
    } else {
        var ope = document.getElementsByName('operacao')

        if (ope[0].checked) { // adição + estiver checado
            c = n1 + n2
            res.innerHTML = `O resultado da adição entre ${n1} e ${n2} é ${c}`

        } else if (ope[1].checked) { // subtração - estiver checado
            c = n1 - n2
            res.innerHTML = `O resultado da subtração entre ${n1} e ${n2} é ${c}`

        } else if (ope[2].checked) { // multiplicação * estiver checado
            c = n1 * n2
            res.innerHTML = `O resultado da multiplicação entre ${n2} e ${n2} é ${c}`

        } else if (ope[3].checked) { // divisão / estiver checado 
            c = n1 / n2
            res.innerHTML = `O resultado da divisão entre ${n1} e ${n2} é ${c}`
        }
        // adicionar mais operações
    }


    /*
    if (n1 != n2) {
        let c = n1 + n2
        res.innerHTML = (`O resultado entre a soma entre ${n1} e ${n2} é ${c}!`)

    } else if (operação == sub) {
        c = n1 - n2

    } else if (operação == mul) {
        c = n1 * n2

    } (operação == div)
    c = n1 / n2
    */
    
    
}

/*

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let c = n1 * n2
    res.innerHTML = (`O resultado entre a soma de ${n1} e ${n2} é ${c}!`)


*/