//classe
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

//factory
function construirPessoa(nome){
    this.nome = nome
    
    this.falar = function(){
        console.log(`Nome ${this.nome}`)
    }
}

const p2 = new construirPessoa('Joao')
p2.falar()