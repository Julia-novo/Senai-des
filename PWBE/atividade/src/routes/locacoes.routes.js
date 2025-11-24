const express = require("express");
const router = express.Router();

const locacoesControllers = require("../controllers/locacoes.controllers");

router.get("/locacoes", locacoesControllers.listarlocacoes);
router.get("/locacoes/:id", locacoesControllers.buscarlocacoes)
router.post("/locacoes", locacoesControllers.cadastrarlocacoes);
router.delete("/locacoes/:id",locacoesControllers.excluirlocacoes);
router.put("/locacoes",locacoesControllers.atualizarlocacoes);
router.get("/locacoes/clientes/:idcliente",locacoesControllers.listarlocacoesIdcliente);
router.get("/locacoes/status/:status",locacoesControllers.listarlocacoesporstatus);
router.get("/locacoes/faturamento/total", locacoesControllers.Faturamento);


module.exports = router;