console.log('qual o tipo do 13? ' + typeof 13)
console.log('qual o tipo do 1.3? ' + typeof 1.3)
console.log('qual o tipo do -5? ' + typeof -5)
console.log('qual o resto da divisão 20/2? ' + 20%2)
console.log('qual o tipo da operação 20/2? ' + typeof (20%2))
console.log('qual o resto da divisão 21/2? ' + 21%2)
console.log("'maura' não é um número? " + isNaN("maura"))
console.log('qual o tipo de `maura`? ' + typeof(`Maura`))
console.log("Exemplo pula linha \n pulou...")
console.log(`a soma de 5 e 3 é ${5+3}`)
console.log("3 == '3'? " + (3 == '3')) 
console.log("3 === '3'? " + (3 === '3')) 
console.log("3 === 3? " + (3 === 3))
console.log("5 > 2? " + (5>2)?'SIM':'NÃO')
console.log("5*null: " + 5*null)
console.log("'5'+1: " + "5"+1)
console.log("'dois'x'tres': " + 'dois'*'tres')

let maiorNumero = Math.max(1,20,13)
console.log(`Maior: ${maiorNumero}`)

let arrendodar = Math.round(5.5934)
console.log(`Maior: ${arrendodar}`)

let arrendodarCima = Math.ceil(5.2934)
console.log(`Maior: ${arrendodarCima}`)

for(let i=10; i > 0; i--){
    if (i%2==0){
        console.log(`${i} é par! Caiu no continue`)
        continue
    }

    console.log(i)
}