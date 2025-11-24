const db = require("../data/connection");

const listarEmail = async (req, res) => {
    const lista = await db.query("SELECT * FROM  Email");
    res.json(lista).end();
};

const buscarEmail = async (req, res) => {
    const idEmail = req.params.id;
    const cliente = await db.query("SELECT * FROM Email WHERE  id = " + idEmail);
    res.json(cliente[0][0]).end();
};

const cadastrarEmail = async (req, res) => {
    const {nome, email} = req.body

    const novoCliente = await db.query("INSERT INTO Email VALUES (DEFAULT, ?, ?)", [nome, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
};

const excluirEmail = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM Email WHERE id = ?", [id]);

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

const atualizarEmail = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const update = await db.query("UPDATE Email SET  nome = ?, email = ? WHERE id = ?", [nome, email, id]);

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
    listarEmail,
    buscarEmail,
    cadastrarEmail,
    excluirEmail,
    atualizarEmail,
    
}
