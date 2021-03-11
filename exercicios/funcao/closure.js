// closure é o escopo onde é criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas á função

const x = 'global'

function fora() {
    const x = 'local'

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())