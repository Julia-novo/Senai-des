const container = document.querySelector(".container");

const btCadastrar = document.querySelector("#btCadastrar");

btCadastrar.addEventListener("click", (event) => {
    event.preventDefault();

    const inpNome = document.querySelector("#nome");
    const inpSobrenome = document.querySelector("#sobrenome");
    const inpCor = document.querySelector("#cor");
    const inpEstado = document.querySelector("#estado");
    const inpCorFonte = document.querySelector("#corfonte");

    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = inpCor.value;

    const pNome = document.createElement("p");
    pNome.innerHTML = "Nome : " + inpNome.value;

    const pSobrenome = document.createElement("p");
    pSobrenome.innerHTML = "Sobrenome : " +
    inpSobrenome.value;

    const pEstado = document.createElement("p");
    pEstado.innerHTML = "Estado :" + inpEstado.value;

    const pFonte = document.createElement("div");
    box.className = "box";
    box.style.color = inpCorFonte.value;

    box.appendChild(pNome);
    box.appendChild(pSobrenome);
    box.appendChild(pEstado);
    box.appendChild(pFonte)

    container.appendChild(box);

    inpNome.value = "";
    inpSobrenome.value = "";
    inpCor.value = "#000";
    inpEstado.value ="";
    inpCorFonte.value = "";
});