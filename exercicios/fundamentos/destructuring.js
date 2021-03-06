// Destructuring é um novo recurso utilizado apartir do ES 2015
const pessoa = {
    nome: 'joao',
    idade: 20,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

const {nome , idade } = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {altura, peso = 0} = pessoa
console.log(altura,peso)

const {endereco: {logradouro,numero, cep}} = pessoa
console.log(logradouro,numero,cep)