const db = require("../data/connection");

const listarEndereco = async (req, res) => {
    const lista = await db.query("SELECT * FROM  Endereco");
    res.json(lista).end();
};

const buscarEndereco = async (req, res) => {
    const idEndereco = req.params.id;
    const cliente = await db.query("SELECT * FROM Endereco WHERE  id = " + idEndereco);
    res.json(cliente[0][0]).end();
};

const cadastrarEndereco = async (req, res) => {
    const {nome, Endereco} = req.body

    const novoCliente = await db.query("INSERT INTO Endereco VALUES (DEFAULT, ?, ?)", [nome, Endereco]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
};

const excluirEndereco = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM Endereco WHERE id = ?", [id]);

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

const atualizarEndereco = async (req, res) => {
    const {id, nome, Endereco} = req.body;

    try{
        const update = await db.query("UPDATE Endereco SET  nome = ?, Endereco = ? WHERE id = ?", [nome, Endereco, id]);

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
    listarEndereco,
    buscarEndereco,
    cadastrarEndereco,
    excluirEndereco,
    atualizarEndereco,
    
}