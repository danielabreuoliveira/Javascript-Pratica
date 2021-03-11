const notas = [5.2, 6.0, 7.1, 5.2, 7.7, 8.1, 9.1]

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//utilizando o callback

notasBaixasCallback = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixasCallback)

const notabaixas2 = notas.filter(notas => notas < 7)

console.log(notabaixas2)
    /*
        const times = ["Vasco", "Flamengo", "Fluminense", "Botafogo",
            "Coritiba", "Atletico - PR", "Atletico - MG",
            "Goias", "Atletico - go", "Gremio", "Internacional",
            "Fortaleza", "Sport",
        ]

        let classificacao = []

        function pontuacaoFinal(min, max) {
            const valor = Math.random() * (max - min) + min
            return Math.floor(valor)
        }

        for (let i in times) {
            let listarTimes = pontuacaoFinal(0, 114)

            classificacao.push(`Time - ${i+1} ` + times[i] + ` - Pontuacao - ${listarTimes}`)

            if (listarTimes[i] >= 45) {
                console.log('Sulamericana')
            }
        }
        console.log(times)
        console.log(classificacao)
        */