const index = localStorage.getItem("eventoIndex");
const eventos = JSON.parse(localStorage.getItem("eventos") || "[]");
const evento = eventos[index];

document.getElementById("titulo").innerText = evento.nome;

document.getElementById("descricao").value = evento.descricao || "";

function salvar() {
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

function salvarDescricao() {
  const texto = document.getElementById("descricao").value;
  evento.descricao = texto;
  salvar();
  alert("Descrição salva!");
}

function upload() {
  const file = document.getElementById("file").files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    evento.imagens.push(e.target.result);
    salvar();
    render();
  }

  if (file) reader.readAsDataURL(file);
}

function render() {
  const div = document.getElementById("imagens");
  div.innerHTML = "";

  evento.imagens.forEach(img => {
    div.innerHTML += `<img src="${img}">`;
  });
}

function voltar() {
  window.location.href = "index.html";
}

render();

