//armazendo uma funçao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 5)

//armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito 

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))