function somaDelay(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            resolve(a+b)
        }, 4000)
    })
}

async function resSoma(a, b, c) {
    let x = somaDelay(a,b)
    let y = c

    return await x + y
}

resSoma(1,2,3).then(v => console.log(v))