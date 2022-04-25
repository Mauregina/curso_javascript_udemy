console.log(document.getElementById('container-principal'))
console.log(document.getElementById('titulo-principal'))

console.log(document.querySelector('#container-principal h1')) // # acessar por id
console.log(document.querySelector('ul .itens-azuis')) // . acessar por classes

// insertBefore = inserir nó antes do nó de referencia
// appendChild = adicionar um nó após todos os elementos do elemento pai especificado
// replaceChild

let novoElemento = document.createElement('p')
let texto = document.createTextNode("Texto adicionado ao parágrafo...")
novoElemento.appendChild(texto)
let elementoAlvo = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')
elementoPai.insertBefore(novoElemento, elementoAlvo)

let novoElemento2 = document.createElement('p')
let texto2 = document.createTextNode("Texto adicionado ao parágrafo 2...")
novoElemento2.appendChild(texto2)
let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode
console.log(pai)
pai.appendChild(novoElemento2)





