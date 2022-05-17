const array = [1,2,3,4,5]

const highNumber = array.filter((n) => {
    if (n>3) {
        return n
    }
})

console.log('Filtrar array ', highNumber)

const users = [
    { name: 'Maura', available: true},
    { name: 'Regina', available: false},
    { name: 'Ana', available: true},
    { name: 'Helena', available: false},
    { name: 'Beatriz', available: false},
]

const availableUsers = users.filter(user => user.available)

console.log('Available ', availableUsers)

//-----------------------------------------------------

const products = [
    { name: 'Camisa', price: 10.99, category: "Roupas"}, 
    { name: 'Chaleira Elétrica', price: 45.50, category: "Eletrônicos"}, 
    { name: 'Fogão', price: 400.00, category: "Eletrônicos"}, 
    { name: 'Saia', price: 5.20, category: "Roupas"} 
]

products.map(i => {
    if (i.category === 'Roupas') {
        i.onSale = true
    }
})

console.log('Adiciona atributo "onSale" para produtos da categoria "roupa" ', products)