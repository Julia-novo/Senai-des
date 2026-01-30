const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(clientes).end();

};  
const atualizar = (req, res) => {
    res.send(clientes).end();
};

const cadastrar = (req, res) => {
    res.send(clientes).end();
};

const consultar =(req, res)=> {
    res.send(clientes).end();
};

module.exports = {
    listar,
    atualizar,
    cadastrar,
    consultar
}