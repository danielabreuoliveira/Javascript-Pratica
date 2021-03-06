function tratarErroELancar(erro){
  // throw new Error('...')
  // throw new 10
  //throw true
  //throw 'Mensagem'
  throw  {
      nome: erro.name,
      msg: erro.message,
      date: new Date
  }
}

function imprimirNomeGritando(obj){
    try{    
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {
    nome: 'Roberto'
}
imprimirNomeGritando(obj)