const express = require("express");
const router = express.Router();

const ContatosController = require("../controllers/contatos.controllers");

router.get("/Contatos", ContatosController.listarcontatos);
router.get("/Contatos/:id", ContatosController.buscarcontatos);
router.post("/cliente", ContatosController.cadastrarcontatos);
router.delete("/cliente/:id", ContatosController.excluircontatos);
router.put("/cliente", ContatosController.atualizarcontatos);

module.exports = router;