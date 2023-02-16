'use strict'

const nota1 = document.getElementById('nota1')
// pegamos o elemento pelo ID pelo document, sendo uma string 

const nota2 = document.getElementById('nota2')
const buttonCalcular = document.getElementById('calcular')
const resultadoInput = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const aprovado = 'Parabens! O aluno foi aprovado'
const reprovado = 'Aluno reprovado'



function media() {
    situacao.value = (Number(nota1.value) + Number(nota2.value)) / 2

    if (nota1.value > 10 || nota1.value < 0 || nota2.value > 10 || nota2.value < 0) {
        formulario.classList.add('sombra-amarela')
        formulario.classList.remove('sombra-verde')
        formulario.classList.remove('sombra-vermelha')
        situacao.value = 'Insira números de 0 a 10'
    } else {
        if (situacao.value > 5) {
            situacao.value = "aprovado"
            formulario.classList.add('sombra-verde')
            formulario.classList.remove('sombra-amarela')
            formulario.classList.remove('sombra-vermelha')
        } else if (situacao.value < 5) {
            situacao.value = "reprovado"
            formulario.classList.add('sombra-vermelha')
            formulario.classList.remove('sombra-amarela')
            formulario.classList.remove('sombra-vermelha')

        }
    }
}

buttonCalcular.addEventListener('click', media)



