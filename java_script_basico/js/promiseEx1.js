//PROMISSE
let p = Promise.resolve(5)
console.log('Testando promisse...')
p.then(value => {return value + 5})
 .then(value => console.log(value))

 let promisseErrada = Promise.resolve(new Error('Algo deu errado!'))
 console.log('Testando promisse com erro...')
 promisseErrada.then(value => console.log(value))
.catch(reason => console.log('Falho: ' + reason))