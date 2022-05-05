let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let p = document.querySelector('p')
let a = document.querySelector('a')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let input = document.querySelector('input')

function msg(e){
    console.log('Clicou em mim') 
    e.stopPropagation() // ao clicar no evento do botao, não aciona o evento do clique no parágrafo
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", (e)=>{
    console.log(e)
    btn1.removeEventListener("click", msg)
})

p.addEventListener("click", ()=>{
    console.log('Clicou no parágrafo')
})

a.addEventListener("click", (e) => {
    e.preventDefault() //nao deixa acionar o evento do link em questão
    console.log("não vai mudar de link")
})

btn3.addEventListener("mousedown", () => {
    console.log("Apertou mouse")
})

btn4.addEventListener("mouseup", () => {
    console.log("Soltou mouse")
})

btn4.addEventListener("contextmenu", (e) => {
    e.preventDefault() // não aciona menu do click direito
    console.log("Clicou com botão direito")
})

btn5.addEventListener("dblclick", () => {
    console.log("Clicou duas vezes")
})

window.addEventListener("keydown", (e) => {
    if (e.key == 'Enter'){
        console.log("Pressionou <enter>")
    } else if (e.key == 'M'){
        console.log("Pressionou <m>")
    } 
})

window.addEventListener("keyup", (e)=>{
    if (e.key == 'Enter'){
        console.log("Soltou <enter>")
    }
})

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 1000){
        console.log("Ativou")
    }
})

input.addEventListener("focus", ()=>{
    console.log('Focou!')
})

input.addEventListener("blur", ()=>{
    console.log('Saiu do input!')
})

window.addEventListener("load", ()=>{
    alert("Carregou a página")
})

// window.addEventListener("beforeunload", function(e) {
//     e.returnValue = null;
// })

let timeout;

window.addEventListener("mousemove", (e)=> {
    clearTimeout(timeout)
    timeout = setTimeout(function(){
        console.log(e.x)
    }, 500)
})