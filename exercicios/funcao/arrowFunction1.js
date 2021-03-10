let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

let oi = function() {
    return 'Olá'
}

oi = () => 'olá'

console.log(dobro(Math.PI))
console.log(dobro(2))
console.log(oi())