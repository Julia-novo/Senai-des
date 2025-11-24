const musica = require("../data/musica.data");

const listar = (req, res) => {
    res.send(musica).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var song;

    musica.forEach((musica, index) => {
        if(song.id === id){
            song = musica;
        }
    });

    if(song === ""){
        user = "Não Encontrado"
    };

    res.send(song).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    musica.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    musica.forEach((musica, index) => {
        if(musica.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
};


module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
   
}



