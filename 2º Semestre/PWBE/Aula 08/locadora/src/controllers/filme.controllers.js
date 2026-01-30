const db = require("../data/connection");

const listarFilmes = async (req, res) => {
    const lista = await db.query("SELECT * FROM  filmes");
    res.json(lista).end();
};

const buscarFilmes = async (req, res) => {
    const idFilmes = req.params.id;
    const filme = await db.query("SELECT * FROM filmes WHERE  id = " + idFilmes);
    res.json(filme[0][0]).end();
};

const cadastrarFilmes = async (req, res) => {
    const { titulo, categoria, preco } = req.body

    try {
        const novoFilme = await db.query("INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?)", [titulo, categoria, preco]);

        const filme = {
            id: novoFilme[0].insertId,
            titulo: titulo,
            categoria: categoria
        }
        res.json(filme).status(201).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }

};

const excluirFilmes = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELETE FROM filmes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        console.log(error);

        const err = { msg: "" };

        if (error.errno === 1451) {

            err.msg = "Filme cadastrado";
        }
        res.status(500).json(err).send();
    }
};

const atualizarFilmes = async (req, res) => {
    const { id, titulo, categoria } = req.body;

    try {
        const update = await db.query("UPDATE filmes SET  titulo = ?, categoria = ? WHERE id = ?", [titulo, categoria, id]);

        const info = { msg: "" }

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1) {
            info.msg = "Filme não encontrado!";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);

        res.status(500).end();
    }
};

const quantCategoria = async (req, res) => {
    try {
        const resultado = await db.query("SELECT categoria, SUM(id) AS locacao_quant FROM filmes GROUP BY categoria;");
        res.json(resultado[0]).status(200).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Erro" }).end();
    }
};

const totalCategoria = async (req, res) => {
    try {
        const resultado = await db.query("SELECT categoria, SUM(preco) AS faturamento_total FROM filmes GROUP BY categoria");
        res.json(resultado[0]).status(200).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Erro" }).end();
    }
};


module.exports = {
    listarFilmes,
    buscarFilmes,
    cadastrarFilmes,
    excluirFilmes,
    atualizarFilmes,
    totalCategoria,
    quantCategoria
}
