const db = require("../data/connection");

const listarlocacao = async (req, res) => {
    const lista = await db.query("SELECT * FROM  locacoes");
    res.json(lista[0]).end();
};

const listarlocacaoId = async (req, res) => {
    const idcliente = req.params.idcliente;
    const lista = await db.query("SELECT * FROM  locacoes WHERE cliente_id = ?", [idcliente]);
    res.json(lista[0]).end();
};


const listarlocacaostatus = async (req, res) => {
    const status = req.params.status;

    try {
        const [locacoes] = await db.query(
            "SELECT * FROM locacoes WHERE status = ?",
            [status]
        );

        res.status(200).json(locacoes).end();
    } catch (error) {
        console.error("Erro ao buscar locações por status:", error);
        res.status(500).json({ msg: "Erro interno ao buscar locações" }).end();
    }
};

const buscarlocacao = async (req, res) => {
    const idlocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE  id = " + idlocacao);
    res.json(locacao[0][0]).end();
};

const cadastrarlocacao = async (req, res) => {
    const {cliente_id, filme_id, data_locacao, status, preco} = req.body

    const novalocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id, filme_id, data_locacao, status, preco]);

    const locacao = {
        id: novalocacao[0].insertId,
        filme_id: filme_id,
        status: status
    }
    res.json(locacao).status(201).end();
};

const excluirlocacao = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

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

const atualizarlocacao = async (req, res) => {
    const {id, data_locacao, status, preco} = req.body;

    try{
        const update = await db.query("UPDATE locacoes SET data_locacao = ?, status = ?, preco = ? WHERE id = ?", [data_locacao, status, preco, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Locação não encontrada!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

const totalFaturamento = async (req, res) =>{
    const total = await db.query("SELECT SUM(preco) AS total FROM locacoes WHERE status = 'ENTREGUE'");
    res.json(total[0][0]).end();

}

const quantfaturamento = async (req, res) =>{
    const total = await db.query("SELECT DATE_FORMAT(locacoes.data_locacao, '%Y-%m') AS mes, COUNT(*) AS total_locacoes, SUM(filmes.preco) AS faturamento FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY DATE_FORMAT(locacoes.data_locacao, '%Y-%m') ORDER BY mes");
    res.json(total[0]).end();
}

module.exports = {
    listarlocacao,
    listarlocacaoId,
    listarlocacaostatus,
    buscarlocacao,
    cadastrarlocacao,
    excluirlocacao,
    atualizarlocacao,
    totalFaturamento,
    quantfaturamento
}