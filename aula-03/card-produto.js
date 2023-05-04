'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.foto = null
        this.titulo = 'Titulo do produto'
        this.descricao = 'Descrição do produto'
        this.preco = null
    }

    static get observedAttributes(){
        return ['foto', 'titulo', 'descricao', 'preco']
    }
    
    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadowRoot.appendChild(this.component())
        this.shadowRoot.appendChild(this.style())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')
    
        const foto = document.createElement('img')
        foto.classList.add('card-image')
        foto.src = `./img/${this.foto}`

        const titulo = document.createElement('h5')
        titulo.classList.add('card-title')
        titulo.textContent = this.titulo

        const descricao = document.createElement('p')
        descricao.classList.add('card-description')
        descricao.textContent = this.descricao

        const preco = document.createElement('span')
        preco.classList.add('card-price')
        preco.textContent = this.preco

        card.append(foto, titulo, descricao, preco)

        return card
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 16px;
            cursor: pointer;
            
        }
        .card:hover{
            box-shadow: 0px 0 8px #0006;
        }
        .card-image{
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
        .card-title{
            font-size: 1.5rem;
        }
        .card-description{
            font-size: 1rem;
        }
        .card-price{
            width: 100%;
            font-size: 1rem;
            font-weight: 900;
        }
        `
        return style
    }

}

customElements.define('card-product', card)