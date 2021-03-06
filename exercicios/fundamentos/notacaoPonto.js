console.log(typeof Console)
console.log(Math.ceil(6.1))

//criando um objeto dinamicamente
const objeto1 = {}
objeto1.nome = 'joao'
objeto1['nome'] = 'Maria'

console.log(objeto1.nome)

function Objeto1(nome){
   this.nome = nome
   this.exec = function(){
       console.log('função ...')
   }
}

const objeto2 = new Objeto1('Carla')
const objeto3 = new Objeto1('Daniel')
console.log(objeto2.nome)
objeto2.exec
console.log(objeto3.nome.exec)