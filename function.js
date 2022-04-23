function numeroAleatorio1(){
    return Math.random()
}
console.log(numeroAleatorio1())

//Função anônima
const numeroAleatorio2 = function(){
    return Math.random()
}
console.log(numeroAleatorio2())

const numeroAleatorio3 = () => {
    return Math.random()
}
console.log(numeroAleatorio3())

//arrow function com apenas 1 parametro
const raizQuadrada = n => n * n

const num = 3
console.log(`Raiz quadrada de ${num} é ${raizQuadrada(num)}`)

function saudacao(nome, idade){
    if (idade === undefined){
        console.log('Olá ' + nome + '!')
    } else {
        console.log('Olá ' + nome + '! Você tem ' + idade + ' anos')
    }
}
saudacao('Maura')
saudacao('Maura', 35)

//argumento default
function potencia(base, exp=2){
    return Math.pow(base, exp)
}

console.log(potencia(2))
console.log(potencia(2, 3))

//closure
function lembraSoma(x){
    return function(y){
        return x+y
    }
}
let soma1 = lembraSoma(2)
console.log(soma1(5))

function retornarNumeroPar(n){
    if (n%2 ==0){
        console.log('N agora é par:' + n)
    } else {
        console.log(n)
        retornarNumeroPar(n-1)
    }
}
retornarNumeroPar(33)

const detectaTipoDado = dado => typeof dado
console.log(detectaTipoDado('Maura'))
console.log(detectaTipoDado(true))
console.log(detectaTipoDado(1))

const retornaPositivo = (num) => {
    return Math.abs(num)
}
console.log(retornaPositivo(-5))
console.log(retornaPositivo(-1.3))

const textoEhLongo = (texto) => {
    if (texto.length > 10) return 'Texto muito longo'
    else return 'Texto curto'
}
console.log(textoEhLongo('Maura Regina Almeida da Costa'))
console.log(textoEhLongo('Olá mundo'))

function decrementa(num){
    if (num < 1) { return }
    if (num%2==0){
        console.log(`${num} é par!`)
    }
    decrementa(num-1)
}
decrementa(9)
