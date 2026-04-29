const express = require("express");
const router = express.Router();

const {
  ListarPublicacao
  , buscarPublicacao
  , cadastrarPublicacao
  , atualizarPublicacao
  , excluirPublicacao
} = require("../controllers/produtos.controller");

router.get("/listar", ListarPublicacao);
router.get("/buscar/:id", buscarPublicacao);
router.post("/cadastrar", cadastrarPublicacao);
router.put("/atualizar/:id", atualizarPublicacao);
router.delete("/excluir/:id", excluirPublicacao);

module.exports = router;