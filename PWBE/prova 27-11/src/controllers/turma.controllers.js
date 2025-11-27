const db = require("../data/connection");

const listar = async (req, res) => {
    const lista = await db.query('SELECT * FROM sala');
    res.json(lista[0]).end();
};



const cadastrar = async (req, res) => {
    const {nome, capacidade} = req.body

    if(capacidade === 0){
        return res.status(400).json({error: "A capacidade deve ser maior que 0"}).end()
    }

    const novoturma = await db.query("INSERT INTO sala VALUES (DEFAULT, ?, ?)", [nome, capacidade]);

    const turma = {
        id: novoturma[0].insertId,
        nome: nome,
        capacidade: capacidade
    }
    res.json(turma).status(201).end();
};

const excluir = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM sala WHERE id = ?", [id]);

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
    const id = req.params.id
    const {nome, capacidade} = req.body;

    try{
        const update = await db.query("UPDATE sala SET nome =?, capacidade =? WHERE id = ?", [nome, capacidade, id]);

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
