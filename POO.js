class Mamifero {
    constructor(tipo){
        this.tipo = tipo
    }
}

class Cachorro extends Mamifero{
    constructor(tipo, raca, cor) {
        super(tipo, tipo)
        this.raca = raca
        this.cor = cor
    }
    get verRaca(){
        return 'A raça é ' + this.raca
    }
    get verCor(){
        return 'A cor é ' + this.cor
    }
    set setarRaca(raca){
        this.raca = raca
    }
    set setarCor(cor){
        this.cor = cor
    }
    latir(){
        console.log('Latindo..')
    }
}

let patas = Symbol()
Cachorro.prototype[patas] = 4

let viraLata = new Cachorro('marsupiais ','vira-lata', 'preto')
console.log(viraLata.verRaca)
console.log(viraLata.verCor)
console.log(viraLata.verCo)
viraLata.latir()
console.log(Cachorro.prototype[patas])
viraLata.setarCor = 'caramelo'
console.log(viraLata.tipo)
console.log(new Cachorro instanceof Mamifero)
console.log(viraLata instanceof Mamifero)
console.log(viraLata.hasOwnProperty('raca'))

//EXERCICIOS
class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

    get getSaldo(){
        return 'Seu saldo é ' + this.saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor
    }
}

conta1 = new Conta(1000)
console.log(conta1.getSaldo)
conta1.depositar(100)
console.log(conta1.getSaldo)
conta1.sacar(60)
console.log(conta1.getSaldo)
