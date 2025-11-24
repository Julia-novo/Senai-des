const dataPosts = require("../data/connection");

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await dataPosts.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = { 
            id: resultado[0].insertId, 
            titulo: titulo,
            conteudo: conteudo
        };
        
        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluirPost = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await dataPosts.query("DELETE FROM posts WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
       
            err.msg = "Usuario registrado";
        }
        res.status(500).json(err).send();
    }
};


const listarPosts = async (req, res) => {
    const status = req.params.status;

    try {
        const [posts] = await db.query(
            "SELECT * FROM posts WHERE status = ?",
            [status]
        );

        res.status(200).json(posts).end();
    } catch (error) {
        console.error("Erro", error);
        res.status(500).json({ msg: "Erro interno ao buscar" }).end();
    }
};

const buscarPosts = async (req, res) => {
    const idposts = req.params.id;
    const posts = await db.query("SELECT * FROM posts WHERE  id = " + idposts);
    res.json(posts[0][0]).end();
};

const totalPosts = async (req, res) =>{
    const total = await db.query("SELECT COUNT(*) AS total FROM posts");
    res.json(total[0]).end();
};

const atualizarPost = async (req, res) => {
    const id = req.params.id;
    const { titulo, conteudo} = req.body;

    try{
        const update = await db.query("UPDATE posts SET  titulo = ?, conteudo =? WHERE id = ?", [titulo, conteudo, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Post não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};


module.exports = {
    createpost,
    excluirPost,
    listarPosts,
    buscarPosts,
    totalPosts, 
    atualizarPost

}