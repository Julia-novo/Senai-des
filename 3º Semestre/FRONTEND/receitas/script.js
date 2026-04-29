const url = 'https://receitasapi-b-2025.vercel.app/';
const receitas = [];

getReceitas();

function abrirModalReceita(receita) {
    const modal = document.getElementById('modalReceita');
    const conteudo = document.getElementById('novoUsuario');

    conteudo.innerHTML = `
        <h2>${receita.nome}</h2>
        <img src="${receita.img}" style="width:100%; border-radius:10px;">
        <p><strong>Modo de preparo:${receita.modoFazer}</strong></p>
       
    `;

    modal.style.display = "block";

}

function fecharReceita() {
    document.getElementById('modalReceita').style.display = "none";
}

function getReceitas() {
    fetch(`${url}receitas`)
        .then(response => response.json())
        .then(data => {
             data.forEach(receita => {
                receitas.push(receita);
            });
            renderReceitas();
        })
     
}

function renderReceitas() {
    const main = document.querySelector('main');
    receitas.forEach(r => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${r.img}" alt="${r.nome}">
            <h2>${r.nome}</h2>
            
        `;
        main.appendChild(card);
    })

}

function renderReceitas() {
    const main = document.querySelector('main');
    main.innerHTML = "";

    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${receita.img}" alt="${receita.nome}">
            <h2>${receita.nome}</h2>
        `;

        card.addEventListener('click', () => {
            abrirModalReceita(receita);
        });

        main.appendChild(card);
    });
}

function abrirModal(novaReceita){
    const modal = document.querySelector('container')
}
  function cancelar() {
    document.getElementById("nome").value = "";
    document.getElementById("Ingredientes").value = "";
    document.getElementById("preparo").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("custo").value = "";
  }

  function salvar() {
    const Novareceita = {
      nome: document.getElementById("nome").value,
      ingredientes: document.getElementById("ingredientes").value,
      preparo: document.getElementById("preparo").value,
      imagem: document.getElementById("imagem").value,
      custo: document.getElementById("custo").value
    };
  }
