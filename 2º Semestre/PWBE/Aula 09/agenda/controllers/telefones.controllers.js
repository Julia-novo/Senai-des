const db = require("../data/connection");

const listartelefone= async (req, res) => {
    const lista = await db.query("SELECT * FROM  telefone");
    res.json(lista).end();
};

const buscartelefone= async (req, res) => {
    const idtelefone= req.params.id;
    const cliente = await db.query("SELECT * FROM telefoneWHERE  id = " + idtelefone);
    res.json(cliente[0][0]).end();
};

const cadastrartelefone= async (req, res) => {
    const {nome, telefone} = req.body

    const novoCliente = await db.query("INSERT INTO telefoneVALUES (DEFAULT, ?, ?)", [nome, telefone]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
};

const excluirtelefone= async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM telefoneWHERE id = ?", [id]);

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

const atualizartelefone= async (req, res) => {
    const {id, nome, telefone} = req.body;

    try{
        const update = await db.query("UPDATE telefoneSET  nome = ?, telefone= ? WHERE id = ?", [nome, telefone, id]);

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
    listartelefone,
    buscartelefone,
    cadastrartelefone,
    excluirtelefone,
    atualizartelefone,
    
}