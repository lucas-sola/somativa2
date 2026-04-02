const data = new Date()
const id = document.querySelector('#saudacao-cinema')
const idVip = document.querySelector('#banner-vip')
const qtdIngresso = document.querySelector('qtd-ingressos')
const totalPagar = document.querySelector('#total-pagar')
const horaAtual = data.getHours()
const botaoPublicar = document.querySelector('#btn-publicar')
const nomeFilme = document.querySelector('#nome-filme')
const mural = document.querySelector('#mural-criticas')
const limparMural = document.querySelector('#btn-apagar')

if (horaAtual < 12) {
    id.textContent = 'Bom dia! Bem-vindo à Sessão Matinê!'
} 
if (horaAtual >= 12 && horaAtual <= 18){
    id.textContent = 'Boa tarde! Sessão da Tarde liberada!'
}
if (horaAtual > 18) {
    id.textContent = 'Boa noite! Prepare-se para a Sessão Coruja!'
}

idVip.addEventListener('mouseover', () => {
    idVip.classList.add('.modo-vip')
})

idVip.addEventListener('mouseout', () => {
    idVip.classList.remove('.modo-vip')
})

if (qtdIngresso) {
    qtdIngresso.addEventListener('input', () => {
    const valor = 35
    const total = Number(qtdIngresso.value) * valor
    totalPagar.textContent = `R$${total.toFixed(2)}`
})
}


botaoPublicar.addEventListener('click', () => {
    nomeFilme.innerHTML+= mural
})

limparMural.addEventListener('click', () => {

})