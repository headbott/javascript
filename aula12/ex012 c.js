var hora = 21
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 23 || hora <=6) {
    console.log('Hora de dormir')
}else if (hora <= 12){
    console.log('Estudar programação')
}else if (hora === 13) {
    console.log('Almoçar')
}else if (hora === 14) {
    console.log('Soneca da tarde')
}else if (hora <=17) {
    console.log('Estudar programação Tarde')
}else if (hora === 18){
    console.log('Treinar')
}else if (hora === 19){
    console.log('Tomar banho')
}else if (hora === 20){
    console.log('Jantar')
}else {
    console.log('Estudar Hélio')
}