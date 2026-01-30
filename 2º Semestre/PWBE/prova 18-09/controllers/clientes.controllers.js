const clientes = require("../data/clientes.data");
const pedido = require("../data/pedidos.data");
const { consultar } = require("./pedidos.controllers");

//define funçao ultilizada na rota 
//req -> request (requisição)
//res -> response (resposta)
const listar = (req, res) => {
    res.send(clientes).end();
};

const buscar = (req, res) => {
    const pedidos = req.params.pedidos;

    var order;

    clientes.forEach((cliente, index) => {
        if (cliente.pedidos === pedidos) {
            order = pedido;
        }
    });

    if (order === "") order = "não encontrado";

    res.send(order).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const pedidos = req.params.clientes;

    var indice = -1;

    clientes.forEach((cliente, index) => {
        if (clientes.pedido === pedido) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        clientes.splice(indice, 1);
        res.status(200).end();
    };

    
};
const atualizar = (req, res) =>{
      const order =req.body;

      var encontrei = false;

      clientes.forEach((usuario, index)=> {
        if(cliente.pedidos === order.pedidos){
            clientes[index] = order;
            encontrei=true
        }
      })
      if(encontrei === false) {
        res.status(404).end();
    }else{
        res.status(201).end();
    }

    };
const alterar = (req, res) => {
    const pedidos = req.params.pedidos;
    const userUpdate = req.body;

    var indice = -1;
    pedidos.forEach((cliente, index) =>{
    if(cliente.pedidos===pedidos){
        indice = index;
    }
     
    });
    if (indice === -1){
        res.status(404).end();
    }else {
       
    Object.keys(userUpdate).forEach((chave) =>{
        clientes[indice][chave] =userUpdate[chave];
    });
    }
res.status(200).end();

}

    
module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar,
    consultar
};
