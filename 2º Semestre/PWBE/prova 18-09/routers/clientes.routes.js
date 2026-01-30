const express = require("express");
const router = express.Router();

const clientesControllers = require("../controllers/clientes.controllers");

router.get("/clientes", clientesControllers.listar);
router.post("/clientes", clientesControllers.cadastrar);
router.put("/clientes/:cpf", clientesControllers.atualizar);
router.post("/clientes",clientesControllers.consultar);
router.patch("/clientes/:cadastro", clientesControllers.alterar);
router.delete("/clientes/:cadastro", clientesControllers.apagar);

module.exports = router;

