const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM  clientes");
    res.json(lista).end();
};

const buscarClientes = async (req, res) => {
    const idClientes = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE  id = " + idClientes);
    res.json(cliente[0][0]).end();
};

const cadastrarClientes = async (req, res) => {
    const {nome, email} = req.body

    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?)", [nome, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
};

const excluirClientes = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM clientes WHERE id = ?", [id]);

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

const atualizarCliente = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const update = await db.query("UPDATE clientes SET  nome = ?, email = ? WHERE id = ?", [nome, email, id]);

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

const totalClientes = async (req, res) => {
    const total = await db.query("SELECT clientes.id, clientes.nome, SUM(filmes.preco) AS total_gasto FROM locacoes INNER JOIN clientes ON locacoes.cliente_id = clientes.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY clientes.id, clientes.nome, clientes.email ORDER BY total_gasto DESC");
    res.json(total[0]).end();
};

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarClientes,
    excluirClientes,
    atualizarCliente,
    totalClientes
}
