function criarProduto(nome, preco){
    return{
        nome,preco,desconto: 0.1
    }  
}

console.log(criarProduto('Arroz',18.00))
console.log(criarProduto('Feijao',5.55))