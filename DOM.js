// Acessando elementos
console.log(document.getElementById('container-principal'))
console.log(document.getElementById('titulo-principal'))

console.log(document.querySelector('#container-principal h1')) // # acessar por id
console.log(document.querySelector('ul .itens-azuis')) // . acessar por classes

// Inserir um novo elemento (ex: parágrafo) antes de um elemento alvo (#titulo-principal)
let novoElemento = document.createElement('p')
let elementoAlvo = document.querySelector('#titulo-principal') 
let elementoPai = document.querySelector('#container-principal')
// Adiciona texto ao novo elemento (parágrafo)
let texto = document.createTextNode("Texto adicionado ao novo elemento inserido via método insertbefore()")
novoElemento.appendChild(texto)
elementoPai.insertBefore(novoElemento, elementoAlvo)

// Inserir um novo elemento (ex: parágrafo) no fim de um elemento pai
let novoElemento2 = document.createElement('p')
let texto2 = document.createTextNode("Texto adicionado ao novo elemento inserido no fim de um elemento pai...")
novoElemento2.appendChild(texto2)
let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode
//adiciona novo elemento no fim do elemento pai
pai.appendChild(novoElemento2)

// Substituir elemento por outro
let novoElemento3 = document.createElement('p')
let texto3 = document.createTextNode('novo texto')
novoElemento3.appendChild(texto3)
let heading = document.querySelector('#sera-substituido')
let paiHeading = heading.parentNode
paiHeading.replaceChild(novoElemento3, heading)

// Inserir texto em um elemento HTML via DOM
let pSemTexto = document.getElementById('preencher-texto')
let texto4 = document.createTextNode('Inserindo um texto num elemento HTML via DOM')
pSemTexto.appendChild(texto4)

// Criar elementos
let lista = document.createElement('ul')
for (i=0; i<5; i++) {
    let item = document.createElement('li')
    let textoLista = document.createTextNode('texto lista ' + i)
    item.appendChild(textoLista)
    lista.appendChild(item)
}
let container = document.getElementById('sem-texto')
container.appendChild(lista)

// Alterar atributos de um elemento
let a = document.querySelector('footer a')
console.log(a.getAttribute('href')) // resultado #
let link = 'https://www.horadecodar.com.br'
a.setAttribute('href', link)
console.log(a.getAttribute('href')) // resultado https://www.horadecodar.com.br

let elemento = document.querySelector('#titulo-principal')
console.log('largura considerando as bordas: ' + elemento.offsetWidth)
console.log('altura considerando as bordas: ' + elemento.offsetHeight)
console.log('largura: ' + elemento.clientWidth)
console.log('altura: ' + elemento.clientHeight)
