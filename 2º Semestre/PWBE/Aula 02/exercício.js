const times = [
    {
    "nome":"corinthias",
    "estado":"SP",
    "fundação":"1910",
    "diretor":"Dorival Junior",
    "vitorias":5,
    "derrotas":6,
    "empates":7
},
{
   "nome":"Flamengo",
    "estado":"RJ",
    "fundação":"1895",
    "diretor":"Alfredo Almeida",
    "vitorias":11,
    "derrotas":2,
    "empates":4 
},
{
    "nome":"Mirassol",
    "estado":"São paulo",
    "fundação":"1925",
    "diretor":"Rafael Guanaes",
    "vitorias":7,
    "derrotas":7,
    "empates":2
}
];



times.forEach((time) => {
    if(time.nome === "Mirassol"){
        console.log(time.nome);
        const pontos = ((time.vitorias * 3) + time.empates);
        console.log(pontos);
        
    }
})
