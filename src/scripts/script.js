const data = new Date();
const id = document.querySelector("#saudacao-cinema");
const vip = document.querySelector("#banner-vip");
const qtdIngresso = document.querySelector("#qtd-ingressos");
const totalPagar = document.querySelector("#total-pagar");
const botaoPublicar = document.querySelector("#btn-publicar");
const nomeFilme = document.querySelector("#nome-filme");
const mural = document.querySelector("#mural-criticas");
const limparMural = document.querySelector("#btn-apagar");
const teste = document.querySelector("card-critica > h3");
const horaAtual = data.getHours();

if (horaAtual < 12) {
  id.textContent = "Bom dia! Bem-vindo à Sessão Matinê!";
}
if (horaAtual >= 12 && horaAtual <= 18) {
  id.textContent = "Boa tarde! Sessão da Tarde liberada!";
}
if (horaAtual > 18) {
  id.textContent = "Boa noite! Prepare-se para a Sessão Coruja!";
}

vip.addEventListener("mouseover", () => {
  vip.classList.add("modo-vip");
});

vip.addEventListener("mouseout", () => {
  vip.classList.remove("modo-vip");
});

qtdIngresso.addEventListener("input", () => {
  const valor = 35;
  const total = Number(qtdIngresso.value) * valor;
  totalPagar.textContent = `R$${total.toFixed(2)}`;
});

botaoPublicar.addEventListener("click", () => {
  const texto = nomeFilme.value;
  mural.innerHTML += `<article class="card-critica">
            <h3>🎬Filme: ${texto.trim()}⭐</h3>
          </article>`
});

limparMural.addEventListener("click", () => {
  mural.innerHTML = "";
  nomeFilme.focus();
});
