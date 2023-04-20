'use strict'

class card extends HTMLElement {
    constructor (){
        super()
        // colocamos o this em shadow para que ele seja global
        // e possa ser usado 
        this.shadow = this.attachShadow({mode: 'open'})
        this.nome = 'Nome do Aluno'
        // 1 - criamos a variavel global para observar
        this.foto = null
        this.color = ' linear-gradient(137deg, rgba(2,0,36,1) 0%, rgba(237,137,203,1) 49%, rgba(255,189,212,1) 100%, rgba(0,212,255,1) 100%)'
        this.turma = 'Turma'
        
    }
    
    static get observedAttributes(){
        // aqui retornara um array do que deve ser observado
        
        // 2 - adiciono no array pedindo para observar
        return['nome', 'foto', 'color', 'turma']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        // acionado quando removido, atualizado ou mudado no geral de alguma forma
        this[nameAttr] = newValue
        // quando passamos assim, não é preciso verificar se temos um nome ou uma foto por exemplo
        // 

        // this[nome] == this.nome - outra forma de acessar objeto
    }

    connectedCallback(){
        // aqui temos dois métodos criados, um component e um style
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.style())
    }

    // criação do elemento 
    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        
        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome
        
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        const linha = document.createElement('div')
        linha.classList.add('card__line')
        

        card.append(imagem, linha, nomeAluno, turma)
        return card
    }

    style(){
        const css = document.createElement('style')
        css.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .card{
                width: 200px;
                height: 300px;
                display: grid;
                grid-template-rows: 60% 3% 20% 10%;
                place-items: center;
                background: ${this.color};
                font-family: 'Roboto', sans-serif;
                border-radius: 10px;
                opacity: 0.5;
                transition: 1s;
            }
            .card__text{
                color: #fff;
                font-size: 1.5rem;
                font-weight: 600;
            }
            .card__image{
                height: 150px;
                width: 150px;
                border-radius: 50%;
                border: 1px solid #fff;
                background-color: #8080c0;
                background-image: url(${this.foto});
                background-size: cover;
            }
            .card__line{
                height: 1px;
                width: 150px;
                background-color: #fff;
            }
            .card:hover{
                opacity: 1;
                cursor: pointer;
            }

        `
        return css
    }
}

// 1 - usamos a classe quando instanciamos o objeto, na linha abaixo
// porem queremos que isso aconteça somente quando a tag for usada
customElements.define('card-nicole', card)