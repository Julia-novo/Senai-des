const btmenu = document.querySelector("#menu");

menu.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const leftNav = nav.style.left;

    if (leftNav === "" || leftNav === "none") {
        nav.style.left = "0";
    } else {
        nav.style.left = "-200px";
    }
});

const content = document.querySelector(".content");
const box = document.querySelector(".box");

const alunos = [
    {
        img: "gab.png",
        nome: "Gabriel Fiovarante",
        nota1: "7.3",
        nota2: "9.0",
        nota3: "10.0"
    },
    {
        img: "gab.png",
        nome: "Salame Seara",
        nota1: "8.3",
        nota2: "9.0",
        nota3: "7.5"
    },
    {
        img: "menina.png",
        nome: "Leite Italac",
        nota1: "9.7",
        nota2: "1.9",
        nota3: "5.4"
    }
];

alunos.forEach((aluno) => {
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("img").src = aluno.img;
    novoCartao.querySelector("#nome").innerHTML = aluno.nome;
    novoCartao.querySelector("#nota1").innerHTML = aluno.nota1;
    novoCartao.querySelector("#nota2").innerHTML = "" + aluno.nota2;
    novoCartao.querySelector("#nota3").innerHTML = "" + aluno.nota3;

    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    if (media >= 7) {
        novoCartao.style.backgroundColor = "#458338";
    } else {
        novoCartao.style.backgroundColor = "#772525";
    }

    content.appendChild(novoCartao);
});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if (conteudo) {
            if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                node.style.display = "block";
            } else {
                node.style.display = "none";
            }
        }
    });
});





