const db = require("../data/connections");

const listarcontatos = async (req, res) => {
    const lista = await db.query("SELECT * FROM  Contatos");
    res.json(lista).end();
};

const buscarcontatos = async (req, res) => {
    const idContatos = req.params.id;
    const contatos = await db.query("SELECT * FROM contatoss WHERE  id = " + idContatos);
    res.json(contatos[0][0]).end();
};

const cadastrarcontatos = async (req, res) => {
    const {nome, email} = req.body

    const novocontatos = await db.query("INSERT INTO contatoss VALUES (DEFAULT, ?, ?)", [nome, email]);

    const contatos = {
        id: novocontatos[0].insertId,
        nome: nome
    }
    res.json(contatos).status(201).end();
};

const excluircontatos = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM contatoss WHERE id = ?", [id]);

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

const atualizarcontatos = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const update = await db.query("UPDATE contatoss SET  nome = ?, email = ? WHERE id = ?", [nome, email, id]);

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

const totalcontatos = async (req, res) => {
    const total = await db.query("SELECT contatos.id, contatos.nome, SUM(filmes.preco) AS total_gasto FROM locacoes INNER JOIN contatos ON locacoes.contatos_id = contatos.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY contatoss.id, contatos.nome, contatos.email ORDER BY total_gasto DESC");
    res.json(total[0]).end();
};

module.exports = {
    listarcontatos,
    buscarcontatos,
    cadastrarcontatos,
    excluircontatos,
    atualizarcontatos,
    totalcontatos
}
