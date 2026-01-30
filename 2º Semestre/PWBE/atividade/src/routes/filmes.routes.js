const express = require("express");
const router = express.Router();

const filmesControllers = require("../controllers/filmes.controllers");

router.get("/filmes", filmesControllers.listarfilme);
router.get("/filmes/:id", filmesControllers.buscarfilmes)
router.post("/filmes", filmesControllers.cadastrarfilme);
router.delete("/filmes/:id",filmesControllers.excluirfilme);
router.put("/filmes",filmesControllers.atualizarfilmes);


module.exports = router;