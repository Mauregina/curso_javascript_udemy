let cachorro = {
    patas: 4,
    nome: 'Alberto',
    raca: 'Vira Lata',
    latir: function(){
        console.log('Latindo...')
    }
}
console.log(cachorro.patas)
cachorro.latir()
delete cachorro.raca
console.log(cachorro.raca)
cachorro.raca = 'Pastor Alemão'
console.log(cachorro.raca)

let objA ={
    prop1: 'prop1',
    prop2: 'prop2',
}

let objB ={
    prop3: 'prop3',
    prop4: 'prop4',
}

let objC ={
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3',
    prop4: 'prop4',
}
console.log(objA)
Object.assign(objA, objB)
console.log(objA)
console.log(Object.keys(objA))
console.log(objA==objC)
objD = objA
console.log(objA==objD)

let pessoas = ['Mateus', 'Joao', 'Ricardo']
let pessoaRemovida = pessoas.pop() //remove ultimo elemento
console.log(pessoaRemovida) 
pessoas.push('Livia') //adiciona elemento ao final do array
console.log(pessoas)
pessoas.shift() //remove primeiro elemento
console.log(pessoas)
pessoas.unshift('Joao') //adiciona elemento no inicio do array
pessoas.unshift('Jeremias') //adiciona elemento no inicio do array
console.log(pessoas)
console.log(pessoas.indexOf('Joao'))
console.log(pessoas.lastIndexOf('Joao'))
console.log(pessoas.slice(1,3))
console.log(pessoas.slice(3))
console.log(pessoas.slice(-1))
console.log(pessoas.slice(0,-2))
console.log(pessoas.reverse())

let milAoContrario = '1'
console.log(milAoContrario.padStart(4, '0'))

let frase = 'O rato roeu a roupa do rei de Roma'
let palavras = frase.split(' ')

palavras.forEach(i=>{
    console.log(i)
})

let novafrase = palavras.join(' ')
console.log(novafrase)

let latir = 'Au'
console.log(latir.repeat(5))

function imprimirNumeros(...args){
    args.forEach(i=>{
        console.log(i)
    })    
}
imprimirNumeros('pausa')
imprimirNumeros(1,2,3)

//jogar propriedades de um objeto em variáveis
let carro = {
    rodas: 4,
    portas: 4,
    tetoSolar: true
}
const {rodas: vRodas, portas: vPortas, tetoSolar: vtetoSolar} = carro
console.log(vRodas)

//jogar elementos de um vetor em variáveis
let vetor = [10,20,30]
let [num1, num2, num3] = vetor
console.log(num2)

//converter Json para string
let carro2 = {
    "marca": "Fiat",
    "rodas": 4,
    "portas": 4,
    "tetoSolar": true,
    "adicionais": ["airbag", "som"]
}
carroString = JSON.stringify(carro2)
console.log(carroString)
console.log(typeof carroString)
carroJSON = JSON.parse(carroString)
console.log(carroJSON)
console.log(typeof carroJSON)

let onibus = {
}
onibus.janela = 20
console.log(onibus)
console.log(onibus.janela)

let nomes = ['Mateus', 'Joao', 'Ricardo', 'Maura']
const existeNome = (nome) => {
    if (nomes.includes(nome)) {
        console.log(`${nome} está no vetor!`)
    } else {
        console.log(`${nome} não está no vetor!`)
    }
}
existeNome('Maura')
existeNome('Renato')

const qtdeElementos = (vetor) => {
    if (vetor.length > 5) {console.log('Muitos elementos')}
    else {console.log('Poucos elementos')}
}
const vetor1 = [1,2,3,4,5,6,7,8,9]
qtdeElementos(vetor1)
const vetor2 = [1,2,3]
qtdeElementos(vetor2)

vetor2.forEach(i=>{
    console.log(i)
})

const json1 = {
    "campo1": "valor1",
    "campo2": true,
    "campo3": 1
}

const calculadora = {
    somar: function(a,b){console.log(`Soma ${a+b}`)},
    subtrair: function(a,b){console.log(`Subtração ${a-b}`)},
    multiplicar: function(a,b){console.log(`Multiplação ${a*b}`)},
    dividir: function(a,b){console.log(`Divisão ${a/b}`)}
}
calculadora.somar(2,3)
calculadora.subtrair(2,3)
calculadora.multiplicar(2,3)
calculadora.dividir(2,3)
