const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

delete produto['marca do produto']
delete produto.preco
console.log(produto)

const carro = {
        modelo: 'A4',
        valor: 90000,
        proprietario: {
            nome: 'Rau',
            idade: 42,
            endereco: {
                logradouro: 'Rua abc',
                numero: 123
            }
        },
        condutores: [{
            nome: 'junior',
            idade: 19
        },{
            nome: 'Julia',
            idade: 44
        }],
        calcularValordoSeguro: function(){

        }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'

//delete carro.proprietario
delete carro.proprietario.endereco
delete carro.calcularValordoSeguro

console.log(carro)