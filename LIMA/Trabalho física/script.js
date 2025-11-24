const lista = document.getElementById ("lista-filmes");
const form = document.getElementById("form-filme");

let filmes = [...filmesIniciais];

function renderFilmes(){
    lista.innerHTML = "";
    filmes.forEach((f) =>{
        const card = document.createElement("div");
        card.className="card";

        card.innerHTML =`
        <div class ="media-container"> 
        <img src = "${f.capa}" alt="${f.nome}"class="poster">
        </div>
        <h3>${f.nome}</h3>
        <p><strong>categoria</strong> ${f.categoria}</p>
        <p class ="estrelas">${"★".repeat(f.estrelas)}${"☆".repeat(5-f.estrelas)}</p>
        `;
        card.addEventListener("mouseleave",()=>{
            mediaContainer.innerHTML = `<img src="${f.capa}"alt=${f.capa}"alt="${f.nome}"class="poster">`;
        });
        lista.appendChild(card);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoFilme = {
        capa: document.getElementById("capa").value.trim(),
        nome:document.getElementById("nome").value.trim(),
        ano:parseInt(document.getElementById("ano").value),
        estrelas: parseInt(document.getElementById("estrelas").value),
    };
    filmes.push(novoFilme);
    renderFilmes();
    form.reset();
});

renderFilmes();