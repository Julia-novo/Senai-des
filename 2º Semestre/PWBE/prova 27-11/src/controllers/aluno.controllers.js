const db = require("../data/connection");

const listar = async (req, res) => {
    const lista = await db.query('SELECT * FROM aluno');
    res.json(lista[0]).end();
};

const cadastrar = async (req, res) => {
    const {nome, turma} = req.body

    const novoaluno = await db.query("INSERT INTO aluno VALUES (DEFAULT, ?, ?)", [nome, turma]);

    const aluno = {
        id: novoaluno[0].insertId,
        nome: nome,
        turma: turma
    };
    res.json(aluno).status(201).end();
};

const excluir = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM aluno WHERE id = ?", [id]);

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
    const {id, nome, turma} = req.body;

    try{
        const update = await db.query("UPDATE aluno SET  nome = ?, turma = ? WHERE id = ?", [nome, turma, id]);

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
