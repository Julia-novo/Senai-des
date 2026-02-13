const livros =[
    {
    "Título":"Raizes do Brasil",
    "Autor":"Sérgio Buarque de Holanda",
    "n de paginas":"256",
    "gênro":"ensaio histórico",
    "protagonista":"história", 
    },
    { 
    "Título":"Jantar secreto",
    "Autor":"Rafael Montes",
    "n de paginas":"360",
    "gênro":"terror",
    "protagonista":"Dante", 
    },
    {
    "Título":"Romeu e Julieta",
    "Autor":"William Shakespeare",
    "n de paginas":"248",
    "gênro":"Tragédia",
    "protagonistas":"Romeu e Julieta", 
    }
];
livros.forEach((livro) => {
    if(livro.titulo === "romeu e julieta"){
        console.log(livro)
    }
});

livros.forEach((livro) => {
    if(livro.titulo === "romeu e julieta") {
        livros.splice(i, 1);
    }
    i++;
});

var novo = {
    titulo: "livro 5",
    autor: "beltrano"
};
livros.push(novo);

livros.forEach((livro) =>{
    if(livro.titulo ==="jantar secreto"){
        livro.autor = "dante";
    }
});

console.log(livros);
