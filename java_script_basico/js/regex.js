
// Expressao regular TEST (retorna TRUE ou FALSE) ou 
// EXEC (retorna NULL, se não encontrado) ou 
// MATCH, parecido com EXEC, porém o método é executado na string. Ex: const frase 'O numero 100 está aqui'.match(/\d+/)

let reg1 = new RegExp('teste')
let reg2 = /bola/

//buscar string dentro de outra string
console.log(reg1.test('tem teste?')) //TRUE
console.log(reg2.test('tem bola?')) //TRUE
console.log(/quadrado/.test('tem quadrado?')) //TRUE

//buscar valor num conjunto
console.log(/[0-9]/.test('Existe 12?')) //TRUE

//. aceita tudo
const pontoRegex = /./
console.log(pontoRegex.test('asd')) //TRUE
console.log(pontoRegex.test(' ')) //TRUE

//\d aceita tudo que contem numeros [0-9]
const dRegex = /\d/ 
console.log(dRegex.test('asd')) //FALSE
console.log(dRegex.test(' ')) //FALSE
console.log(dRegex.test('123sad')) //TRUE

//\d aceita tudo que não contem só numeros [^0-9]
const dRegex2 = /\D/ 
console.log(dRegex2.test('asd')) //TRUE
console.log(dRegex2.test(' ')) //TRUE
console.log(dRegex2.test('123')) //FALSE
console.log(dRegex2.test('123sad')) //TRUE

//\d aceita tudo que contem não contem alfa-numéricos
const sRegex = /\s/ 
console.log(sRegex.test('asd')) //FALSE
console.log(sRegex.test(' ')) //TRUE
console.log(sRegex.test('123')) //FALSE
console.log(sRegex.test('123sad')) //FALSE

//\d aceita tudo que contem contem alfa-numéricos
const wRegex = /\w/ 
console.log(wRegex.test('asd')) //TRUE
console.log(wRegex.test(' ')) //FALSE
console.log(wRegex.test('123')) //TRUE
console.log(wRegex.test('123sad')) //TRUE

//\d aceita se há 4 dígitos numéricos
const ano = /\d\d\d\d/ 
console.log(ano.test('2019')) //TRUE
console.log(ano.test('20')) //FALSE

//\d aceita se há 2 dígitos numéricos
const dia = /\d\d/ 
console.log(dia.test('maura')) //FALSE
console.log(dia.test('20')) //TRUE

//\d aceita se há palavras com no mínimo 3 letras
const letras = /\w\w\w/ 
console.log(letras.test('a')) //FALSE
console.log(letras.test('asd')) //TRUE

//\d aceita se NÃO há os caracteres
const notAZ = /[^a-z]/ 
console.log(notAZ.test('123')) //TRUE
console.log(notAZ.test('abc')) //FALSE
console.log(notAZ.test('abc123')) //TRUE

//\d aceita apenas números
const umOuMaisNumeros = /\d+/ 
console.log(umOuMaisNumeros.test('158')) //TRUE
console.log(umOuMaisNumeros.test(' ')) //FALSE
console.log(umOuMaisNumeros.test('ASD')) //FALSE

//\d aceita outros caracter no lugar do caracter antes da interrogacao
const padrao = /Abacax?i/ 
console.log(padrao.test('Abacaxi')) //TRUE
console.log(padrao.test('Abacai')) //TRUE

//\d aceita números. Alfa numérico é opcional
const padrao2 = /\d+\w?/ 
console.log(padrao2.test('123')) //TRUE
console.log(padrao2.test('123 ')) //TRUE

//valida telefone
const telefone = /\(\d{2}\)\d{4,5}-\d{4}/
console.log(telefone.test('9144-3435')) //FALSE
console.log(telefone.test('(92)9144-3435')) //TRUE
console.log(telefone.test('9144-335')) //FALSE

//Fomatar padrao 
const reg = /\w+: (Mateus|Joao|Maria)/ // Nome: xxx
console.log(reg.test('Nome: Mateus')) //TRUE
console.log(reg.test('Nome: Jose')) //FALSE
console.log(reg.test('Mateus')) //FALSE

//Validar domínio
const dominio = /www.\w+\.com|com.br/ 
console.log(dominio.test('www.google.com')) //TRUE
console.log(dominio.test('www.google.com.br')) //TRUE
console.log(dominio.test('www.123.com')) //TRUE
console.log(dominio.test('www.google')) //FALSE

//Validar domínio com www opcional 
const dominio2 = /[?www.]\w+\.com|com.br/ 
console.log(dominio2.test('www.google.com')) //TRUE
console.log(dominio2.test('google.com.br')) //TRUE
console.log(dominio2.test('www.123.com')) //TRUE
console.log(dominio2.test('www.google')) //FALSE

//Validar email
const email = /\w+@\w+\.\w+/
console.log(email.test('maura@gmail.com')) //TRUE
console.log(email.test('mauragmail.com')) //FALSE

//Valida data
const dataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/
console.log(dataNasc.test('05/02/2000')) //TRUE

//Aceitar so letras maiusculas
const maiuscula = /[A-Z]/
console.log(maiuscula.test('ABC')) //TRUE
console.log(maiuscula.test('a')) //FALSE

//Aceitar string que termine com ID
const id = /\d+ID\b/
console.log(id.test('123ID')) //TRUE
console.log(id.test('123IDo')) //FALSE
console.log(id.test('abcID')) //FALSE

//Aceitar 'Marca: nomeDaMarca', sendo o nome da marca Nike, Adidas ou Puma
const padraoMarca = /Marca: (Nike|Adidas|Puma)/
console.log(padraoMarca.test('Marca: Nike')) //TRUE
console.log(padraoMarca.test('Marca: Dell')) //FALSE
console.log(padraoMarca.test('Marca Nike')) //FALSE

//Validar IP
const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
console.log(ip.test('192.68.1.1')) //TRUE