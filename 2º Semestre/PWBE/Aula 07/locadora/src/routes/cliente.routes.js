const express = require("express");
const router = express.Router();

const clientesControllers = require("../controllers/cliente.controllers");

router.get("/clientes", clientesControllers.listarClientes);
router.get("/cliente/:id", clientesControllers.buscarCliente)
router.post("/cliente", clientesControllers.cadastrarCliente);
router.delete("/cliente/:id",clientesControllers.excluirCliente);
router.put("/cliente",clientesControllers.atualizarCliente);


module.exports = router;