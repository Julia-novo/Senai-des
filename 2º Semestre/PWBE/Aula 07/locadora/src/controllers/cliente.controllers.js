const db = require("../data/connection")

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista).end();
}

const buscarCliente = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id =" + idCliente);
    res.json(cliente[0][0]).end();
}

const cadastrarCliente = async (req, res) => {
const { nome, email } = req.body;

    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?)", [nome, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }

    res.json(cliente).status(201).end();
};

const excluirCliente = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM clientes WHERE id =?",[id]);

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
        
   const atualizarCliente = async (req, res) => {
    const {id, nome , email} = req.body;

    try{
               const update = await db.query("UPDATE clientes SET nome =?, email = ? where id = ?", [nome, email, id]);
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
    listarClientes,
    buscarCliente,
    cadastrarCliente,
    excluirCliente,
    atualizarCliente
}

