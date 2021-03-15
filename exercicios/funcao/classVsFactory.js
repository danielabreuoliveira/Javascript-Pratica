class Pessoa{
    constructor(nome){
        this.nome = nome
    }
   falar() {
        console.log(`Meu nome: , ${this.nome}`)
        
    }
}

const p1 = new Pessoa('Daniel')
p1.falar()

const pessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome: ${nome}`)
    }
}

const p2 = new Pessoa('Mickaella')
p2.falar()


function Carro(velocidadeMaxima = 200, delta = 5) {

    let velocidadeAtual = 0

    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}
