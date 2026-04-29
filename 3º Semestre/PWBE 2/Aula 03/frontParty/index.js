function getEventos() {
  return JSON.parse(localStorage.getItem("eventos") || "[]");
}

function setEventos(eventos) {
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  getEventos().forEach((e, i) => {
    lista.innerHTML += `
      <div class="card">
        <b>${e.nome}</b><br>
        <button onclick="ver(${i})">Detalhes</button>
        <button onclick="excluir(${i})">Excluir</button>
      </div>
    `;
  });
}

function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function salvarEvento() {
  const nome = document.getElementById("nome").value;
  if (!nome) return alert("Digite um nome");

  const eventos = getEventos();

  eventos.push({ 
    nome, 
    descricao: "", 
    imagens: [] 
  });

  setEventos(eventos);

  fecharModal();
  render();
}
function excluir(i) {
  const eventos = getEventos();
  eventos.splice(i, 1);
  setEventos(eventos);
  render();
}

function ver(i) {
  localStorage.setItem("eventoIndex", i);
  window.location.href = "detalhes.html";
}

render();