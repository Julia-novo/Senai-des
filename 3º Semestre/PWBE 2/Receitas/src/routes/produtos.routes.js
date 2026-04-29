const express = require("express");
const router = express.Router();

const {
  listar,
  buscar,
  cadastrar,
  atualizar,
  excluir
} = require("../../controllers/produtos.controller");

router.get("/produtos", listar);
router.get("/produtos/:id", buscar);
router.post("/produtos", cadastrar);
router.put("/produtos/:id", atualizar);
router.delete("/produtos/:id", excluir);

module.exports = router;