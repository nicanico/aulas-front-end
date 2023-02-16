'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const newDiv = document.createElement('div') /* novo objeto*/
    newDiv.classList.add('aluno') /* adiciona uma classe*/
    newDiv.innerHTML = `<h2 class="aluno_nome">${nome}</h2>
                        <span class="aluno_nota">${nota}</span>`
    /* podemos usar o innerHTML antes da linha de anexo*/
    if(valor == '' || nome == ''){
        alert('Você deixou campos vazios')
    }else{ 
        if(valor < 5){
        newDiv.classList.add('fundo-vermelha')
        newDiv.classList.remove('fundo-verde')
        }else if(valor > 5){

        newDiv.classList.add('fundo-verde')
        newDiv.classList.remove('fundo-vermelha')
        }
    }
    container.appendChild(newDiv)/* anexa sem ler novamente*/
}

/* essa função serve exclusivamente para chamar o adicionarCard */
const hadleClick = () => {
    /* caixa de texto para digitação */
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Digite a nota do aluno')
    let valor = Number(nota)
    
adicionarCard(nome, nota)
}

adicionar.addEventListener('click', hadleClick)