'use strict'

import { produtos } from "./produtos.js"

const criarCard = ( produto ) =>{ 
    const card = document.createElement('div')
    card.classList.add('card')
    
    const foto = document.createElement('img')
    foto.classList.add('card-image')
    foto.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card-title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card-description')
    descricao.textContent = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card-price')
    preco.textContent = produto.price

    card.append(foto, titulo, descricao, preco)

    return card
}

const carregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

    // console.log(cards)
}

carregarProdutos()