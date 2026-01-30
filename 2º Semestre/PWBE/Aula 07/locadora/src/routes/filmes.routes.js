const express = require("express");
const router = express.Router();

const filmeController = require("../controllers/filmes.controllers");

router.get("/filmes", filmeController.listarFilmes);
router.get("/filmes/:id", filmeController.buscarFilmes);
router.post("/filme", filmeController.cadastrarFilmes);
router.delete("/filme/:id", filmeController.excluirFilmes);
router.put("/filme", filmeController.atualizarFilmes);

module.exports = router;