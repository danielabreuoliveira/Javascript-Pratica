const fabricantes = ["Mercedez", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
    /*fabricantes.forEach(function(fabricante) {
        console.log(fabricante)
    })*/
fabricantes.forEach(fabricante => console.log(fabricante))

const times = ["Vasco", "Fluminense", "Flamengo", "botafogo"]

function imprimirTime(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

times.forEach(imprimir)