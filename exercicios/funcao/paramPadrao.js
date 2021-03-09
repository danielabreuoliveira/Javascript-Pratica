//gerar valor do parametro padrao
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0), soma(3, 0, 2))

//gerar outro valor
function soma1(a, b, c) {
    a = a !== undefined ? a : 1
}