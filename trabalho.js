const geradorDeTagsDeIdentificacao = (nomePet) => {
    const nomeTratado = nomePet.trim().toUpperCase().split(' ')
    return nomeTratado[0]
}

const verificarSePodeSerAdotado = (idade, porte) => {
    const idadeMinimaAdocao = 2
    if(porte === 'P'){
        return true;
    }else if(idade >= idadeMinimaAdocao){
        return true
    }else {
        return false
    }
}

const calcularConsumoDeRacao = (nome, quantidadeDias, pesoDogEmKg) => {
    const totalDeRacaoPorDia = pesoDogEmKg * 30
    return totalDeRacaoPorDia
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

const buscarDadoAsync = () => {}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}