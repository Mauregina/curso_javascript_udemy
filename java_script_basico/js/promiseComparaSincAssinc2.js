const betterDeveloper = 'Maura'

// Exemplo com processamento SÍNCRONO
function whoIsBetterCallback(callBack, errorCallBack){
    if (betterDeveloper != 'Maura' && betterDeveloper != 'Nelson') {
        errorCallBack({
            name: 'This is wrong!',
            message: betterDeveloper + '? Really?'
        })
    } else {
        callBack({
            name: betterDeveloper,
            message: 'CDF are the best!'
        })
    }
}

//chama função passando como parâmetro duas funções anônimas
whoIsBetterCallback(
    (result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    },
    (error) => {
        console.log(error.name + ' ' + error.message)
    }
)

// Exemplo com processamento ASSÍNCRONO ----------------------------------------------------------
function whoIsBetterCallback2(){

    return new Promise((resolve, reject) => {
    
        if (betterDeveloper != 'Maura' && betterDeveloper != 'Nelson') {
            reject({
                name: 'This is wrong!',
                message: betterDeveloper + '? Really?'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDF are the best!'
            })
        }
    })
}

//chama funcao passando como parâmetro duas funções anônimas
whoIsBetterCallback2()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message)
    })
