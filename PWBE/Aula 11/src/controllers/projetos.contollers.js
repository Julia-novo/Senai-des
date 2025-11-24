const db = require("../data/connection");

const listarprojeto = async (req, res) => {
    const lista = await db.query("SELECT * FROM  projeto");
    res.json(lista).end();
};

const buscarprojeto = async (req, res) => {
    const idprojeto = req.params.id;
    const projeto = await db.query("SELECT * FROM projetos WHERE  id = " + idprojeto);
    res.json(projeto[0][0]).end();
};

const cadastrarprojeto = async (req, res) => {
    const {nome} = req.body

    const novoprojeto = await db.query("INSERT INTO projetos VALUES (DEFAULT, ?, ?)", [nome]);

    const projeto = {
        id: novoprojeto[0].insertId,
        nome: nome
    }
    res.json(projeto).status(201).end();
};

const excluirprojeto = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM projetos WHERE id = ?", [id]);

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

const atualizarprojeto = async (req, res) => {
    const {id, nome} = req.body;

    try{
        const update = await db.query("UPDATE projetos SET  nome = ?, email = ? WHERE id = ?", [nome, id]);

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

const totalprojeto = async (req, res) => {
    const total = await db.query("SELECT projeto.id, projeto.nome, SUM(filmes.preco) AS total_gasto FROM locacoes INNER JOIN projeto ON locacoes.projeto_id = projeto.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY projetos.id, projeto.nome, projeto.email ORDER BY total_gasto DESC");
    res.json(total[0]).end();
};

module.exports = {
    listarprojeto,
    buscarprojeto,
    cadastrarprojeto,
    excluirprojeto,
    atualizarprojeto,
    totalprojeto
}
