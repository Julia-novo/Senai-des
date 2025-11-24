const express = require("express");
const router = express.Router();

const locacoesController = require("../controllers/locacoes.controllers");

router.get("/locacoes", locacoesController.listarlocacao);
router.get("/locacoes/status/:status", locacoesController.listarlocacaostatus);
router.get("/locacoes/:id", locacoesController.buscarlocacao);
router.get("/locacoes/cliente/:idcliente", locacoesController.listarlocacaoId);
router.post("/locacoes", locacoesController.cadastrarlocacao);
router.delete("/locacoes/:id", locacoesController.excluirlocacao);
router.put("/locacoes", locacoesController.atualizarlocacao);
router.get("/locacoes/total/faturamento", locacoesController.totalFaturamento);
router.get("/locacoes/quant/faturamento", locacoesController.quantfaturamento);

module.exports = router;