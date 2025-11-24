const db = require("../data/connection");

const listarfuncionario = async (req, res) => {
    const lista = await db.query('SELECT * FROM funcionarios');
    res.json(lista[0]).end();
};

const buscarfuncionario = async (req, res) => {
    const idfuncionario = req.params.id;
    const funcionario = await db.query("SELECT * FROM funcionarios WHERE  id = " + idfuncionario);
    res.json(funcionario[0][0]).end();
};

const cadastrarfuncionario = async (req, res) => {
    const {nome, email, telefone} = req.body

    const novofuncionario = await db.query("INSERT INTO funcionarios VALUES (DEFAULT, ?, ?, ?)", [nome, email, telefone]);

    const funcionario = {
        id: novofuncionario[0].insertId,
        nome: nome
    }
    res.json(funcionario).status(201).end();
};

const excluirfuncionario = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM funcionarios WHERE id = ?", [id]);

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

const atualizarfuncionario = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const update = await db.query("UPDATE funcionarios SET  nome = ?, email = ? WHERE id = ?", [nome, email, id]);

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

const totalfuncionario = async (req, res) => {
    const total = await db.query("SELECT funcionario.id, funcionario.nome, SUM(filmes.preco) AS total_gasto FROM locacoes INNER JOIN funcionario ON locacoes.funcionario_id = funcionario.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY funcionarios.id, funcionario.nome, funcionario.email ORDER BY total_gasto DESC");
    res.json(total[0]).end();
};

module.exports = {
    listarfuncionario,
    buscarfuncionario,
    cadastrarfuncionario,
    excluirfuncionario,
    atualizarfuncionario,
    totalfuncionario
}
