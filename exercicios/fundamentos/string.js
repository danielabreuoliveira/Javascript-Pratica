const trabalho = "FNDE"

console.log(trabalho.charAt(2))
console.log(trabalho.charCodeAt(3))
console.log(trabalho.substr(1))
console.log(trabalho.indexOf('3'))
console.log(trabalho.substr(0, 2))

console.log('Trabalho '.concat(trabalho).concat("!"))
console.log('Trabalho ' + trabalho + "!")
console.log(trabalho.replace('D', 'e'))
console.log(trabalho.replace(/\d/, 'e'))
console.log(trabalho.replace(/\w/g, 'e'))
console.log("Joao, maria, cecilia".split(','))