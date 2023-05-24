function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // antes de mostrar a tabuada (limpa a area da tabuada)
        while (c <= 10) {
            // adicion <option> no HTML (de forma dinâmica) //
            let item = document.createElement('option') // option
            item.text = `${n} x ${c} = ${n*c}` // value
            item.value = `tab${c}` // ajuda a saber qual item foi selecionado - tab 1 2 3 (usado mais para outra linguagens)
            tab.appendChild(item) // adicionar a tabuada
            c++
        }
    }
    
}