const playlist_musica = require("../data/palylist_musica.data");

const listar = (req, res) => {
    res.send(playlist_musica).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var songs;

    playlist_musica.forEach((songs, index) => {
        if(songs.id === id){
            songs = playlist_musica;
        }
    });

    if(songs === ""){
        user = "Não Encontrado"
    };

    res.send(book).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    playlist_musica.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    playlist_musica.forEach((playlist_musica, index) => {
        if(playlist_musica.id === id){
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
    apagar
}

