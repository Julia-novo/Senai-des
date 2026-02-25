const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    const clientes = req.body;

    const novocliente = await prisma.clientes.create({
        data: clientes
    });

   let nome = novocliente.nome_completo.trim().split(" ").
   if(nome.lenght < 2)
    
    console.log("nome incompleto"); 

    res.json(novocliente).status(201).end();
};

const listarclientes = async(req, res) =>{
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
};

const buscarclientes = async(req,res) =>{
    const { id } = req.params;

    const clientes = await prisma.clientes.findUnique({
        where: { id },
        include: {
            locadora: true
        }
    });

    res.json(clientes).status(200).end();
};

const apagarclientes = async(req,res) =>{
    const { id } = req.params;

    const clientes = await prisma.clientes.delete({
        where: { id }
    });

    res.json(clientes).status(200).end();
};

const atualizarclientes = async(req,res) =>{
    const { id } = req.params;
    const dados = req.body;

    const clientes = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(clientes).status(200).end();
};

module.exports = { 
    novoCliente,
    listarclientes,
    buscarclientes,
    apagarclientes,
    atualizarclientes
};