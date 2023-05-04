'use strict'

import { produtos } from "./produtos.js"
import './card-produto.js'


const criarCard = ( produto ) =>{ 

    const card = document.createElement('card-product')
    card.classList.add('card')

    card.titulo = produto.name
    card.descricao = produto.description
    card.preco = produto.price
    card.foto = produto.image

    return card
}

const carregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

}

carregarProdutos()
