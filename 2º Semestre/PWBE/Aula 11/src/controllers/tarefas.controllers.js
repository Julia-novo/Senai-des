const db = require("../data/connection");

const listartarefas = async (req, res) => {
    const lista = await db.query("SELECT * FROM  tarefas");
    res.json(lista).end();
};

const buscartarefas = async (req, res) => {
    const idtarefas = req.params.id;
    const tarefas = await db.query("SELECT * FROM tarefas WHERE  id = " + idtarefas);
    res.json(tarefas[0][0]).end();
};

const cadastrartarefas = async (req, res) => {
    const {status, prazo, nome} = req.body

    const novotarefas = await db.query("INSERT INTO tarefass VALUES (DEFAULT, ?, ?)", [status, prazo, nome]);

    const tarefas = {
        id: novotarefas[0].insertId,
        nome: nome
    }
    res.json(tarefas).status(201).end();
};

const excluirtarefas = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM tarefass WHERE id = ?", [id]);

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

const atualizartarefas = async (req, res) => {
    const {id, status, prazo, nome} = req.body;

    try{
        const update = await db.query("UPDATE tarefass SET  nomestatus, prazo, nome = ? WHERE id = ?", [status, prazo, nome, id]);

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

const totaltarefas = async (req, res) => {
    const total = await db.query("SELECT tarefas.id, tarefas.nome, SUM(filmes.preco) AS total_gasto FROM locacoes INNER JOIN tarefas ON locacoes.tarefas_id = tarefas.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY tarefass.id, tarefas.nome, tastatus, prazo, nome ORDER BY total_gasto DESC");
    res.json(total[0]).end();
};

module.exports = {
    listartarefas,
    buscartarefas,
    cadastrartarefas,
    excluirtarefas,
    atualizartarefas,
    totaltarefas
}
