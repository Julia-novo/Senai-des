const express = require("express");
const router = express.Router();

const locacaoController = require("../controllers/locacao.controllers");

router.get("/locacoes", locacaoController.listarlocacao);
router.get("/locacoes/status/:status", locacaoController.listarlocacaostatus);
router.get("/locacao/:id", locacaoController.buscarlocacao);
router.get("/locacoes/cliente/:idcliente", locacaoController.listarlocacaoId);
router.post("/locacao", locacaoController.cadastrarlocacao);
router.delete("/locacao/:id", locacaoController.excluirlocacao);
router.put("/locacao", locacaoController.atualizarlocacao);
router.get("/locacoes/total", locacaoController.totalFaturamento);

module.exports = router;