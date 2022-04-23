"use strict" //obriga a usar let, const a declarar uma variavel
let opa = 'teste'

//Debugger
let a = 1
let b = 2
//debugger

for (let i=1; i < 5; i++){
    b++
    a = b*2
    //debugger
}

//Tratar input com função

function checarNumero(num) {
    let number = Number(num)

    if (Number.isNaN(number)){
        console.log(`${num} não é um número`)
    } else {
        console.log('Número informado ' + number)
    }
}

checarNumero(5)
checarNumero('5')
checarNumero('teste')

//Exception - para código ao lancar erro

function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error('Nome deve ser string')
    } else {
        console.log('Olá ' + nome)
    }
}
saudacao('Maura')
saudacao(1)
console.log('continua')


