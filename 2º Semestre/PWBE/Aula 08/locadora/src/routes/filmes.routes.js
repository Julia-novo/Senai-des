const express = require("express");
const router = express.Router();

const filmeController = require("../controllers/filme.controllers");

router.get("/filmes", filmeController.listarFilmes);
router.get("/filmes/:id", filmeController.buscarFilmes);
router.post("/filme", filmeController.cadastrarFilmes);
router.delete("/filme/:id", filmeController.excluirFilmes);
router.put("/filme", filmeController.atualizarFilmes);
router.get("/filmes/quantidade/categoria", filmeController.quantCategoria);
router.get("/filmes/categoria/total", filmeController.totalCategoria);

module.exports = router;