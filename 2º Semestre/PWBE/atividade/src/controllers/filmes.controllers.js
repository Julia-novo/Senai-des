const db = require("../data/connection")

const listarfilme = async (req, res) => {
    const lista = await db.query("SELECT * FROM filmes");
    res.json(lista).end();
}

const buscarfilmes = async (req, res) => {
    const idfilmes = req.params.id;
    const filmes = await db.query("SELECT * FROM filmes WHERE id =" + idfilmes);
    res.json(filmes[0][0]).end();
}

const cadastrarfilme = async (req, res) => {
const { titulo, categoria, preco } = req.body;

    const novofilme = await db.query("INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?)", [titulo, categoria, preco]);

    const filme = {
        id: novofilme[0].insertId,
        titulo: titulo
    }

    res.json(filme).status(201).end();
};

const excluirfilme = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM filmes WHERE id =?",[id]);

        console.log(remove);

        res.status(200).end();
        } catch(error){
                 console.log(error);

                 const err ={ msg :""}

                if(error.errno === 1451) {
                    error.msg = "Usuário com locação registrada";
                }

                 res.status(500).json(err).end();
        }
};
        
   const atualizarfilmes = async (req, res) => {
    const {id, titulo , categoria, preco} = req.body;

    try{
               const update = await db.query("UPDATE filmes SET titulo =?, categoria, preco = ? where id = ?", [titulo, categoria, preco]);
               const info = {msg:""};

               if(update[0].affectedRows === 1) {
                info.msg = "Atualizando com sucesso";
               }else if(update[0].affectedRows === 0){
                info.msg = "Usuario não encontrado"
               }
    }catch(error) {
        res.status(500).end();
    }
   };     

        


module.exports = {
    listarfilme,
    buscarfilmes,
    cadastrarfilme,
    excluirfilme,
    atualizarfilmes
}

