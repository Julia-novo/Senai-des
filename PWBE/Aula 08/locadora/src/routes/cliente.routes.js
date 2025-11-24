const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/cliente.controllers");

router.get("/clientes", clientesController.listarClientes);
router.get("/clientes/:id", clientesController.buscarClientes);
router.post("/cliente", clientesController.cadastrarClientes);
router.delete("/cliente/:id", clientesController.excluirClientes);
router.put("/cliente", clientesController.atualizarCliente);
router.get("/clientes/total/gasto", clientesController.totalClientes);

module.exports = router;