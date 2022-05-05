// Exemplo com processamento SÍNCRONO
function sumNumber(){
    let a = 1+1
    
    if (a == 2){
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback(){
    console.log('Yeah! Number 2!')
}

function errorCallback(){
    console.log('Something wrong!')
}

sumNumber()

// Exemplo com processamento ASSÍNCRONO
let p = new Promise(function (resolve, reject) {
    let a = 1+1
    
    if (a == 2){
        resolve('Sucess')
    } else {
        reject('Failed')
    }    
})

p.then(msg => {
    console.log('This is in the then ' + msg)
}).catch(err => {
    console.log('This is in the catch ' + err)
}

)