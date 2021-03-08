//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 2)
imprimirSoma(2)
imprimirSoma(3, 4, 5, 6)
imprimirSoma()

//funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(32, 2))
console.log(soma(3))
console.log()