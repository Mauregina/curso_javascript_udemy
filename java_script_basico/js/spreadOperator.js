const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log('juntou 2 arrays: ', a3)

const a4 = [0, ...a1, 4]

console.log('insere array no meio de outro array: ', a4)

const carName = {name: 'Gol'}
const carBrand = {name: 'VW'}
const otherInfos = {km: 100, price: 15000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log('concatenta objetos de carro: ', car)