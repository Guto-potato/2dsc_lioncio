// FAZ REFERENCIA  AOS ELEMENTOS DOM
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('#resultado')
const divisao = document.querySelector('.divicao')
const adicao = document.querySelector('.adicao')
const subitracao = document.querySelector('.subitracao')
const multiplicacao = document.querySelector('.multiplicacao')
// alert(numero1)
//CRIA FUNÇÃO CALCULAR
function calcular(){
    const n1 = Number (numero1.value)
    const n2 = Number (numero2.value)
    if(typeof n1 === 'number'
        && typeof n2 === 'number') {
            const add = `A soma de ${n1} e ${n2} = ${n1+n2}`
            //alert (add)
            adicao.innerHTML = add
        } else {
            alert ('Por favor, digite um número')
        }
    //alert('resultado:  ' + resultado)
}
//ADICIONA ESCUTAR DE EVENTOS
btnCalcular.addEventListener('click', function(evento){
   evento.preventDefault() // Tirar o comportamento padrão
   calcular()
})