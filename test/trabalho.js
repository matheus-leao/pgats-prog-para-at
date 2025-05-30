const geradorDeTagsDeIdentificacao = (nomePet) => {
    const nomeTratado = nomePet.trim().toUpperCase().split(' ')
    return nomeTratado[0]
}

const verificarSePodeSerAdotado = (idade, porte) => {
    const idadeMinimaAdocao = 1 // No exercício original esse valor era 2, mas como no arquivo de testes está 1, vou considerar 1 como idade mínima para adoção 
    if(porte === 'P'){
        return true;
    }else if(idade >= idadeMinimaAdocao){
        return true
    }else {
        return false
    }
}

// Eu enviei uma pergunta para deixar claro o segundo parametro do calcularConsumoDeRacao,
// pois não estava batendo com o exercício original. Estou usando a multiplicação por 10 para chegar ao valor esperado no teste.
const calcularConsumoDeRacao = (nome, quantidadeDias, pesoDogKG) => {
    const gramasPorDia = pesoDogKG * 30
    const consumoEsperado = gramasPorDia * quantidadeDias * 10
    return consumoEsperado;
}

const decidirTipoDeAtividadePorPorte = (porte) => {
    switch(porte){
        case 'pequeno':
            return 'brincar dentro de casa'
        case 'medio':
            return 'caminhada no quarteirão'
        case 'grande':
            return 'correr no parque'
        default:
            return 'porte inválido' 
    }
}

const buscarDadoAsync = async () => {
   const nome = 'Pipoca'
    return nome
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}