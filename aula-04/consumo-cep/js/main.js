'use strict'

console.log(cep)

// import { pesquisarCep } from "./viacep.js"
// import { pesquisarCepPostmon } from "./postmon.js"
import { pesquisarCepBrasilApi } from "./brasilapi.js"

const preencherFormulario = async () =>{
    // pega o valor do input cep


    const cepDigitado = document.getElementById('cep').value

    if(cepDigitado == ''){
        confirm('Por favor informe o CEP')
    } else if(isNaN(cepDigitado) || cepDigitado < 8){
        confirm('O cep deve ser composto por 8 números, configura sua entrada')
    } else {
    const cep = await pesquisarCepBrasilApi(cepDigitado)

    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
    }

    // console.log('teste')

}

document.getElementById('cep').addEventListener('blur', preencherFormulario)
