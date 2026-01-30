const usuarios = require("../data/usuarios.data");

const listar = (req, res) => {
    res.send(usuarios).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var users;

    usuarios.forEach((usuarios, index) => {
        if(usuarios.id === id){
            usuarios = users;
        }
    });

    if(users === ""){
        users = "Não Encontrado"
    };

    res.send(users).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    usuarios.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    usuarios.forEach((usuarios, index) => {
        if(usuarios.id === id){
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

