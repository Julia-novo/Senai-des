let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);
const filtroGenero = document.querySelector("#filtroGenero");

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    limparCampos();
}


function salvarfilme() {
    const imagem = document.getElementById("inputImagem").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const ano = document.getElementById("ano").value.trim();
    const sinopse = document.getElementById("sinopse").value.trim();


    const existe = filmes.find(filme => filme.nome === nome);
    if (existe) {
        alert("Nome já cadastrado!");
        return;
    }

    const novoFilme = {
        id: Date.now(),
        imagem,
        genero,
        nome,
        ano,
        sinopse
    };
    filmes.push(novoFilme);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}


function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";


    filtroGenero.addEventListener("input", () => {
        renderizarTabela(filtroGenero.value);
    });

    filmes.forEach(filmes => {
        tabela.innerHTML += `
        <tr>
        <td><img src="${filmes.imagem}"></td>
            <td>${filmes.genero}</td>
            <td>${filmes.nome}</td>
             <td>${filmes.ano}</td>
              <td>${filmes.sinopse}</td>
               <button onclick="excluirFilme(${filmes.id})">Excluir</button>
               </td>
               </tr>
               `;
    })
}
function excluirFilme(id) {
    if (!confirm("Deseja excluir ?")) return;

    filmes = filmes.filter(filme => filme.id !== id)
    atualizarLocalStorage();
    renderizarTabela();

}
function atualizarLocalStorage() {
    localStorage.setItem("filmes", JSON.stringify(filmes));
}
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("sinopse").value = "";
}





