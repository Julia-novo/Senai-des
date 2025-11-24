const reservas = require("../Data/Reserva.data");

const listar = (req, res) => {
    res.send(reservas).end();

};  
const atualizar = (req, res) => {
    res.send(reservas).end();
};

const cadastrar = (req, res) => {
    res.send(reservas).end();
};
module.exports = {
    listar,
atualizar,
    cadastrar
}
