'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nomeAluno, notaAluno) => {
    const container = document.getElementById('container')
    const newDiv = document.createElement('div') /* novo objeto*/
    newDiv.classList.add('aluno') /* adiciona uma classe*/
    newDiv.innerHTML = `<h2 class="aluno_nome">${nomeAluno}</h2>
                        <span class="aluno_nota">${notaAluno}</span>`
    /* podemos usar o innerHTML antes da linha de anexo*/

    if (notaAluno == '' || nomeAluno == '') {
        alert('Você deixou campos vazios')
    } else {
        if (notaAluno < 5) {
            newDiv.classList.add('fundo-vermelha')
            newDiv.classList.remove('fundo-verde')
        } else if (notaAluno > 5) {
            newDiv.classList.add('fundo-verde')
            newDiv.classList.remove('fundo-vermelha')
        }
    }
    container.appendChild(newDiv)/* anexa sem ler novamente*/
}

/* essa função serve exclusivamente para chamar o adicionarCard */
const hadleClick = () => {
    /* caixa de texto para digitação */
    const aluno = {
        nome: prompt('Digite o nome do aluno'),
        nota: prompt('Digite a nota do aluno')
    }
    const nomeAluno = aluno.nome
    if (isNaN(aluno.nota)) {
        alert('A nota passada precisa ser numerica')
    } else {
        const notaAluno = Number(aluno.nota)
        adicionarCard(nomeAluno, notaAluno)
    }
}

adicionar.addEventListener('click', hadleClick)