function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' // <br> quebra a linha
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            // Contagem regressiva
        } else {
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`  
    }

}

/* 
    for (var c = i; c <= f; p)
    res.innerHTML = `${c}`
*/

/*
    var ini = 4
    var fim = 40
    var pas = 2

    if (ini == 0){
        console.log(`Impossível contar!`)
    }else if (pas == 0) {
    window.alert('Passo inválido! Considerando PASSO 1')
    } 
    for (var c = ini; c <= fim; pas)
        console.log(c)
*/