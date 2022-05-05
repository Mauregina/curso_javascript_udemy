console.log('1')

// Executa o código num tempo futuro, de forma assincrona
// A funcao setTimeout recebe 2 parametros:
//   1. callback = função que é executada após outra função ser finalizada
//   2. tempo em milisegundos

setTimeout(function(){
    console.log('5')
}, 2000)

console.log('2')
console.log('3')
console.log('4')

