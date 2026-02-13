const btmenu = document.querySelector("#menu");

menu.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const leftNav  = nav.style.left;

    if(leftNav === "" || leftNav ==="none") {
        nav.style.left = "0";
    }else {
        nav.style.left = "-200px";
    }
});

const content = document.querySelector(".content");
const box = document.querySelector(".box");

const produtos = [
    {
        img:"pao.png",
        nome:"Pão Puma",
        valor:10.99
    },
    {
        img:"salame.png",
        nome:"Salame Seara",
        valor:63.99
    },
   {
        img:"leite.png",
        nome:"Leite Italac",
        valor:8.69
    },
    {
        img:"licor.png",
        nome:"licor 43",
        valor:249.90
    }
];

produtos.forEach((produto) => {
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("img").src = produto.img;
    novoCartao.querySelector("#nome").innerHTML = produto.nome;
    novoCartao.querySelector("#valor").innerHTML = "R$" + produto.valor;

    content.appendChild(novoCartao);
});

const busca =document.querySelector("#buscar");

busca.addEventListener("keyup", () =>{
    content.childNodes.forEach((node) =>{
        let conteudo = node.innerHTML;
        if(conteudo){
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                node.style.display = "block";
            }else {
                node.style.display = "none";
        }
        }
    });
});





