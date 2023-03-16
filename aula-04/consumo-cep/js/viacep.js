'use strict'

export const pesquisarCep = async (cepPesquisa) => {

    // url da API
    const url = `https://viacep.com.br/ws/${cepPesquisa}/json/`

    // faz a requisição pela url que aguarda uma promessa 
    const response = await fetch(url)
    // await - aguardo da resposta, nesse caso ele aguarda o fetch responder
    // acompanhada dela informamos que nossa função é async 
    const data = await response.json()

    // console.log('resposta do server: ', data)

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        estado: data.uf
    }

}
