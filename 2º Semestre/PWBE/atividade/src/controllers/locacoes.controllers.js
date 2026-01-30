const db = require("../data/connection")

const listarlocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista).end();
}

const buscarlocacoes = async (req, res) => {
    const idlocacoes = req.params.id;
    const locacoes = await db.query("SELECT * FROM locacoes WHERE id =" + idlocacoes);
    res.json(locacoes[0][0]).end();
}

const cadastrarlocacoes = async (req, res) => {
    const { cliente_id, filme_id, data_locacao, status, preco } = req.body;


    try {
        const novolocacoes = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id, filme_id, data_locacao, status, preco]);

        const locacoes = {
            id: novolocacoes[0].insertId,
            cliente_id: cliente_id,
            filme_id: filme_id,
            data_locacao: data_locacao,
            status: status,
            preco: preco
        }

        res.json(locacoes).status(201).end();
    } catch (error) {

        console.log(error);

        const err = { msg: "" }

        if (error.errno === 1452) {
            err.msg = "Filme/Cliente não cadastrado";
        }

        res.status(500).json(err).end();
    }

};

const excluirlocacoes = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELETE FROM locacoes WHERE id =?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        console.log(error);

        const err = { msg: "" }

        if (error.errno === 1451) {
            error.msg = "Usuário com locação registrada";
        }

        res.status(500).json(err).end();
    }
};

const atualizarlocacoes = async (req, res) => {
    const { data_locacao, filme_id, cliente_id, status, preco } = req.body;

    try {
        const update = await db.query("UPDATE locacoes SET titulo =?, categoria, preco = ? where id = ?", [data_locacao, filme_id, cliente_id, status, preco]);
        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizando com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Usuario não encontrado"
        }
    } catch (error) {
        res.status(500).end();
    }



};
const listarlocacoesIdcliente = async (req, res) => {
    const idcliente = req.params.idcliente;
    const lista = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [idcliente]);
    res.json(lista[0]).end();
};

const listarlocacoesporstatus = async (req, res) => {
    const status = req.params.status;
    const listar = await db.query("SELECT * FROM  locacoes WHERE status = ?", [status]);
    res.json(listar[0]).end();
};

const Faturamento = async (req, res) => {
    const total = await db.query("SELECT SUM(preco) AS total FROM locacoes WHERE status = 'ENTREGUE'");
    res.json(total[0][0]).end();
}




module.exports = {
    listarlocacoes,
    buscarlocacoes,
    cadastrarlocacoes,
    excluirlocacoes,
    atualizarlocacoes,
    listarlocacoesIdcliente,
    listarlocacoesporstatus,
    Faturamento
}

