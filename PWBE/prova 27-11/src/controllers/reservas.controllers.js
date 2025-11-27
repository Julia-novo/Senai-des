const db = require("../data/connection");

const listar = async (req, res) => {
    const lista = await db.query('SELECT * FROM reservas');
    res.json(lista[0]).end();
};



const cadastrar = async (req, res) => {
    const {id_aluno, id_sala, data_reserva, horario} = req.body

    const novoreservas = await db.query("INSERT INTO reservas VALUES (DEFAULT, ?, ?, ?, ?)", [id_aluno, id_sala, data_reserva, horario]);

    const reservas = {
        id: novoreservas[0].insertId,
        id_aluno: id_aluno,
        id_sala: id_sala,
        data_reserva: data_reserva,
        horario: horario
    }
    res.json(reservas).status(201).end();
};

const excluir = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM reservas WHERE id =?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
       
            err.msg = "Usuario com locação registrada";
        }
        res.status(500).json(err).send();
    }
};

const atualizar = async (req, res) => {
    const id = req.params.id;
    const {id_aluno, id_sala, data_reserva, horário} = req.body;

    try{
        const update = await db.query("UPDATE reservas SET  id_aluno= ?, id_sala=?, data_reserva =?, horário =? WHERE id = ?", [id_aluno, id_sala, data_reserva, horário, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Usuario não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};


module.exports = {
    listar,
    cadastrar,
    excluir,
    atualizar,
    
}
