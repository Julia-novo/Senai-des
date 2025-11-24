const playlist = require("../data/playlist.data");

const listar = (req, res) => {
    res.send(playlist).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var compilation;

    playlist.forEach((playlist, index) => {
        if(playlist.id === id){
            compilation = playlist;
        }
    });

    if(compilation === ""){
        user = "Não Encontrado"
    };

    res.send(compilation).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    playlist.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    playlist.forEach((playlist, index) => {
        if(playlist.id === id){
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
