// Exemplo utilizando PROMISSE
function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Nirvana') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            })
        } else {
            reject({
                success: false,
                msg: band + '? Im not so sure!'
            })
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Drain You by ' + response.bandName)
        } else {
            reject('Do you know Nirvana')
        }
    })
}

// bestRockBand('Nirvana')
//   .then(response => {
//       console.log('Checking the answer...')
//       return bestRockSong(response)
//   })
//   .then(response => {
//     console.log('Finding the best song...')
//     console.log(response)     
//   })  
//   .catch(err => {
//       console.log(err.msg)
//   })

// Exemplo utilizando ASYNC/AWAIT visando diminuir a qtd de THEN
async function doTheJob(){
    try {
        const bestRockBandResponse = await bestRockBand('Nirvana')
        console.log(bestRockBandResponse)
        const bestRocSongResponse = await bestRockSong(bestRockBandResponse)
        console.log(bestRocSongResponse)
    }catch(err){
        console.log(err.msg)
    }
}
doTheJob()
